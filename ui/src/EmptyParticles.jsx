import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const EmptyParticles = ({ count = 15000, sensorValue = 0, mountRef = null }) => {
  if (!mountRef) mountRef = useRef(null);
  const animationRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const geometryRef = useRef(null);
  const materialRef = useRef(null);
  const pointsRef = useRef(null);// Local state for pulsing
  const pulseStrengthRef = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#F0EEE6");
    // Soft ambient light
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    // Point light simulating glow inside ventricles
    const pointLight = new THREE.PointLight(0xff4444, 1.2, 10);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: false,
      stencil: false,
      depth: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        opacity: { value: 0.6 },
        speedFactor: { value: 1.0 },
        pulseStrength: { value: 0.0 },   // NEW: driven by sensor peaks
        pulsePhase: { value: 0.0 }       // NEW: alternates left/right
      },
      vertexShader: `
        uniform float time;
        uniform float speedFactor;
        uniform float pulseStrength;
        uniform float pulsePhase;
        attribute float size;
        attribute vec3 customColor;
        varying vec3 vColor;
        varying float vChamber;   // NEW: 0=left, 1=right

    
        float heartFactor(float a){
          float s = sin(a);
          float base = 0.65 + 0.55 * (1.0 - s);
          float cleft = 0.4 * pow(abs(cos(a)), 0.8);
          return clamp(base + cleft, 0.4, 1.6);
        }
    
        void main() {
          vColor = customColor;
          vec3 pos = position;
    
          float radius = length(pos.xz);
          float angle = atan(pos.z, pos.x);
          float height = pos.y;
    
          float vessel = smoothstep(0.3, 0.7, radius) * smoothstep(1.0, 0.7, radius);
    
          // Left/right assignment
          // Rotation & breathing space modulated by speedFactor (from BLE)
          // angle += time * 0.08;
          float space = sin(time * 0.3 * speedFactor + radius * 3.0) * 0.1;

          // Oscillators: left and right ~π out of phase
          float chamber = step(0.0, pos.x); // 0 = left, 1 = right
          vChamber = chamber;
          float chamberPhase = chamber * 3.14159;
          float pulse = sin(time * 2.0 * speedFactor + pulsePhase + chamberPhase);
    
          // Contraction strength scaled by sensor
          float contraction = 1.0 - (pulseStrength * max(pulse, 0.0));
    
          // Heart geometry modulation
          float h = heartFactor(angle);          

          float newRadius = (radius + space)  * h * contraction * vessel;
    
          vec3 newPos;
          newPos.x = cos(angle) * newRadius;
          newPos.z = sin(angle) * newRadius;
          newPos.y = height * vessel * contraction - 1.2;
    
          newPos *= 2.75;
    
          vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
          gl_PointSize = size * (128.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float opacity;
        varying vec3 vColor;
        varying float vChamber;   // NEW
        void main() {
          vec2 c = gl_PointCoord - vec2(0.5);
          float d2 = dot(c, c);
          if (d2 > 0.25) discard;
                  
          // Base chamber colors (left brighter, right darker red)
          vec3 leftColor = vec3(0.6, 0.05, 0.08);
          vec3 rightColor = vec3(0.9, 0.1, 0.15);

          vec3 color = mix(leftColor, rightColor, vChamber);

          float alpha = (1.0 - smoothstep(0.2025, 0.25, d2)) * opacity;

          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      side: THREE.DoubleSide,
      vertexColors: true,
    });
    
    materialRef.current = particleMaterial;

    // Geometry
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    let i3 = 0;
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const radius = Math.pow(t, 0.5);
      const angle = t * Math.PI * 40.0;
      const vesselHeight = Math.sin(t * Math.PI) * 1.8;

      const randRadius = radius + (Math.random() - 0.5) * 0.05;
      const randAngle = angle + (Math.random() - 0.5) * 0.1;

      positions[i3] = Math.cos(randAngle) * randRadius;
      positions[i3 + 1] = vesselHeight;
      positions[i3 + 2] = Math.sin(randAngle) * randRadius;

      const shade = 0.1 + Math.sqrt(radius) * 0.1 + Math.random() * 0.02;
      colors[i3] = shade;
      colors[i3 + 1] = shade;
      colors[i3 + 2] = shade;

      sizes[i] = (1.0 - Math.abs(vesselHeight * 0.5)) * 0.2 + 0.1;

      i3 += 3;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("customColor", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometryRef.current = geometry;

    const points = new THREE.Points(geometry, particleMaterial);
    scene.add(points);
    pointsRef.current = points;

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const mat = particleMaterial;

      mat.uniforms.time.value = time;
      // Decay the contraction between beats
      // pulseStrengthRef.current *= 0.92;
      // mat.uniforms.pulseStrength.value = pulseStrengthRef.current;
    
      // Slowly alternate left/right phasing
      mat.uniforms.pulsePhase.value = time * 0.5;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (pointsRef.current) scene.remove(pointsRef.current);
      if (geometryRef.current) geometryRef.current.dispose();
      if (materialRef.current) materialRef.current.dispose();
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement.parentNode) {
          rendererRef.current.domElement.parentNode.removeChild(
            rendererRef.current.domElement
          );
        }
      }
    };
  }, [count]);

  // Drive speed from sensor
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.speedFactor.value = 0.5 + sensorValue / 50.0;
      const spike = Math.min(sensorValue / 50.0, 1.0);
      pulseStrengthRef.current = Math.min(pulseStrengthRef.current, spike);
      

    }
  }, [sensorValue]);

  return <div ref={mountRef} style={{ width: "50vw", height: "50vh" }} />;
};

export default EmptyParticles;
