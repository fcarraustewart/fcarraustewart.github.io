import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const EmptyParticles = ({ count = 15000, sensorValue = 0 }) => {
  const mountRef = useRef(null);
  const animationRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const geometryRef = useRef(null);
  const materialRef = useRef(null);
  const pointsRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#F0EEE6");
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
      },
      vertexShader: `
        uniform float time;
        uniform float speedFactor;
        attribute float size;
        attribute vec3 customColor;
        varying vec3 vColor;

        // Heart modulation in polar form (lightweight, stable)
        // Base cardioid-like curve: r ~ (1.0 - sin(theta)), tweaked for a heart silhouette.
        float heartFactor(float a){
          // a in radians
          float s = sin(a);
          // cardioid component (1 - sinθ) scaled + offset to stay positive
          float base = 0.65 + 0.55 * (1.0 - s);
          // subtle "cleft" emphasis using |cosθ|
          float cleft = 0.4 * pow(abs(cos(a)), 0.8);
          return clamp(base + cleft, 0.4, 1.6);
        }

        void main() {
          vColor = customColor;
          vec3 pos = position;

          float radius = length(pos.xz);
          float angle = atan(pos.z, pos.x);
          float height = pos.y;

          // Vessel falloff (keeps an "empty" inner volume)
          float vessel = smoothstep(0.3, 0.7, radius) * smoothstep(1.0, 0.7, radius);

          // Rotation & breathing space modulated by speedFactor (from BLE)
          angle += time * 0.08;
          float space = sin(time * 0.3 * speedFactor + radius * 3.0) * 0.1;

          // Heart modulation of radial distance in XZ plane
          float h = heartFactor(angle);
          float newRadius = (radius + space) * vessel * h * speedFactor;

          vec3 newPos;
          newPos.x = cos(angle) * newRadius;
          newPos.z = sin(angle) * newRadius;
          newPos.y = height * vessel - 1.2;

          // Global scale to fit canvas
          newPos *= 2.75;

          vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
          gl_PointSize = size * (128.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float opacity;
        varying vec3 vColor;
        void main() {
          vec2 c = gl_PointCoord - vec2(0.5);
          float d2 = dot(c, c);
          if (d2 > 0.25) discard; // stay circular
          float alpha = (1.0 - smoothstep(0.2025, 0.25, d2)) * opacity;
          gl_FragColor = vec4(vColor, alpha);
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
      particleMaterial.uniforms.time.value = time;
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
    }
  }, [sensorValue]);

  return <div ref={mountRef} style={{ width: "50vw", height: "50vh" }} />;
};

export default EmptyParticles;
