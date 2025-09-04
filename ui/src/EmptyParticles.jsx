import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const deg2rad = (deg) => (deg * Math.PI) / 180;

const EmptyParticles = ({
  count = 25000,
  sensorValue = 0,
  imu = { roll: 1.0, pitch: 0, yaw: 1.0 }, // IMU degrees
  mountRef = null,
}) => {
  if (!mountRef) mountRef = useRef(null);
  const animationRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const geometryRef = useRef(null);
  const materialRef = useRef(null);
  const pointsRef = useRef(null);
  const pulseStrengthRef = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#F0EEE6");
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 10;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        opacity: { value: 0.6 },
        speedFactor: { value: 1.0 },
        pulseStrength: { value: 0.0 },
        pulsePhase: { value: 0.0 },
        lightPos: { value: new THREE.Vector3(0, 0, 5) },
        lightColor: { value: new THREE.Color(1, 0.6, 0.6) }, // NEW
      },
      vertexShader: `
        uniform float time;
        uniform float speedFactor;
        uniform float pulseStrength;
        uniform float pulsePhase;
        attribute float size;
        attribute vec3 customColor;
        varying vec3 vColor;
        varying vec3 vPos;
        varying float vChamber;

        float heartFactor(float a){
          float s = abs(sin(a));
          float base = 0.65 + 0.55 * (1.0 - s);
          float cleft = 0.4 * pow(abs(cos(a)), 1.8);
          return clamp(base + cleft, 0.4, 1.6);
        }

        void main() {
          vColor = customColor;
          vec3 pos = position;

          float radius = length(pos.xz);
          float angle = atan(pos.z, pos.x);
          float height = pos.y;
          float vessel = smoothstep(0.3, 0.7, radius) * smoothstep(1.0, 0.7, radius);

          float space = sin(time * 0.3 * speedFactor + radius * 3.0) * 0.1;
          angle += time * 0.2;
          float chamber = step(0.0, pos.x);
          vChamber = chamber;
          float chamberPhase = chamber * 3.14159;
          float pulse = sin(time * 2.0 * speedFactor + pulsePhase + chamberPhase);

          float contraction = 1.0 - (pulseStrength * max(pulse, 0.0));

          float h = heartFactor(angle);
          float newRadius = (radius + space) * h * contraction * vessel;

          vec3 newPos;
          newPos.x = cos(angle) * newRadius;
          newPos.z = sin(angle) * newRadius;
          newPos.y = height * vessel * contraction - 1.2;

          newPos *= 2.75;
          vPos = newPos;

          vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
          gl_PointSize = size * (128.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float opacity;
        uniform vec3 lightPos;
        uniform vec3 lightColor;
        varying vec3 vColor;
        varying vec3 vPos;
        varying float vChamber;

        void main() {
          vec2 c = gl_PointCoord - vec2(0.5);
          float d2 = dot(c, c);
          if (d2 > 0.25) discard;

          vec3 leftColor = vec3(0.6, 0.05, 0.08);
          vec3 rightColor = vec3(0.9, 0.1, 0.15);
          vec3 baseColor = mix(leftColor, rightColor, vChamber);

          // Lighting
          vec3 L = normalize(lightPos - vPos);
          vec3 N = normalize(vPos); // fake normal
          float diff = max(dot(N, L), 0.0);

          // Stronger effect
          vec3 lit = baseColor * (0.3 + 1.2 * diff) * lightColor;

          float alpha = (1.0 - smoothstep(0.2025, 0.25, d2)) * opacity;
          gl_FragColor = vec4(lit, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
    materialRef.current = particleMaterial;
    // Geometry (grotesque heart-like shape)
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    let i3 = 0;
    for (let i = 0; i < count; i++) {
      const t = i / count;

      // radial + vertical distribution
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.3) * 2.5;

      // Left ventricle (bigger bulge)
      const isLeft = Math.random() > 0.35;
      const baseRadius = isLeft
        ? 0.9 + Math.random() * 0.2 // thicker
        : 0.7 + Math.random() * 0.15; // smaller

      // Add atrial bulges near the top
      const atrialFactor = height > 0.6 ? 1.2 : 1.0;

      // Grotesque irregularity
      const noise =
        (Math.sin(angle * 3.3 + height * 2.5) +
          Math.random() * 0.7) *
        0.15;

      const radius = baseRadius * atrialFactor + noise;

      // Position
      positions[i3] = Math.cos(angle) * radius + (isLeft ? -0.3 : 0.3);
      positions[i3 + 1] = height;
      positions[i3 + 2] = Math.sin(angle) * radius;

      // Color shading (darker core → brighter surface)
      const shade = isLeft ? 0.8 + Math.random() * 0.2 : 0.5 + Math.random() * 0.2;
      colors[i3] = shade * 0.9;
      colors[i3 + 1] = shade * 0.05;
      colors[i3 + 2] = shade * 0.08;

      // Particle size varies with depth (grotesque organ look)
      sizes[i] = 0.2 + Math.random() * 0.4;

      i3 += 3;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("customColor", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometryRef.current = geometry;

    const pointLight = new THREE.PointLight(0xff2222, 1.5, 10);
    pointLight.position.set(0, 0, 2);
    pointLight.name = "heartLight";
    scene.add(pointLight);

    const points = new THREE.Points(geometry, particleMaterial);
    scene.add(points);
    pointsRef.current = points;

    const clock = new THREE.Clock();
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      particleMaterial.uniforms.time.value = time;
      // particleMaterial.uniforms.pulsePhase.value = time * 0.5;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (pointsRef.current) scene.remove(pointsRef.current);
      if (geometryRef.current) geometryRef.current.dispose();
      if (materialRef.current) materialRef.current.dispose();
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.domElement.remove();
      }
    };
  }, [count]);

  // Update contraction from HRM sensor
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.speedFactor.value = 0.5 + sensorValue / 50.0;
      pulseStrengthRef.current = Math.min(sensorValue / 50.0, 1.0);
      materialRef.current.uniforms.pulseStrength.value = pulseStrengthRef.current;
    }
  }, [sensorValue]);

  useEffect(() => {
    if (materialRef.current && sceneRef.current) {
      const { roll, pitch, yaw } = imu || { roll: 0, pitch: 0, yaw: 0 };

      // Convert degrees → radians
      const radRoll = (roll * Math.PI) / 180;
      const radPitch = (pitch * Math.PI) / 180;
      const radYaw = (yaw * Math.PI) / 180;

      // Light movement
      const r = 3.0; // radius of light orbit
      const x = r * Math.cos(radYaw) * Math.cos(radPitch);
      const y = r * Math.sin(radPitch);
      const z = r * Math.sin(radYaw) * Math.cos(radPitch);

      const light = sceneRef.current.getObjectByName("heartLight");
      if (light) {
        light.position.set(x, y, z);
      }
    }
  }, [imu]);


  return <div ref={mountRef} style={{ width: "50vw", height: "50vh" }} />;
};

export default EmptyParticles;
