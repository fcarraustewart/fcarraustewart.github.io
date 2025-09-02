import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const EmptyParticles = ({ count = 45000, sensorValue = 0 }) => {
  const mountRef = useRef(null);
  const animationRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const geometryRef = useRef(null);
  const materialRef = useRef(null);
  const pointsRef = useRef(null);
  
  // Camera drag & inertia
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  // 🟢 Initial setup so we see the vessel
  targetRotation.current.x = 0.2;   // a slight tilt down
  targetRotation.current.y = Math.PI / 6; // 30° angle
  currentRotation.current.x = targetRotation.current.x;
  currentRotation.current.y = targetRotation.current.y;


  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#F0EEE6");
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(80, width / height, 0.4, 599);
    camera.position.z = 8;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
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
        opacity: { value: 0.09 },
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
          float cleft = 0.8 * pow(abs(cos(a)), 0.8);
          return clamp(base + cleft, 0.4, 1.6);
        }

        void main() {
          vColor = customColor;
          vec3 pos = position;

          float radius = length(pos.xz);
          float angle = atan(pos.z, pos.x);
          float height = pos.y;

          // Vessel falloff (keeps an "empty" inner volume)
          float vessel = smoothstep(0.7, 0.7, radius) * smoothstep(1.0, 0.7, radius);

          // Rotation & breathing space modulated by speedFactor (from BLE)
          angle += time * 0.2;
          float space = sin(time * 0.3 * speedFactor + radius * 3.0) * 0.1;

          // Heart modulation of radial distance in XZ plane
          float h = heartFactor(angle*speedFactor*0.5 + time*0.1);
          float newRadius = (radius + space) * vessel * h * speedFactor;

          vec3 newPos;
          newPos.x = cos(angle/speedFactor) * newRadius;
          newPos.z = sin(angle/speedFactor) * newRadius - 0.1 * speedFactor;
          newPos.y = height/speedFactor * vessel - 0.02*speedFactor;

          // Global scale to fit canvas
          newPos *= 2.0;

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
          if (d2 > 0.65) discard; // stay circular
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

    // Geometry setup (same as yours)...
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

    // 🎥 Mouse drag controls with inertia
    const onMouseDown = (e) => {
      isDragging.current = true;
      lastMouse.current.x = e.clientX;
      lastMouse.current.y = e.clientY;
      velocity.current.x = 0;
      velocity.current.y = 0; // reset momentum
    };
    const onMouseUp = () => {
      isDragging.current = false;
    };
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - lastMouse.current.x;
      const deltaY = e.clientY - lastMouse.current.y;
      lastMouse.current.x = e.clientX;
      lastMouse.current.y = e.clientY;

      targetRotation.current.y += deltaX * 0.005;
      targetRotation.current.x += deltaY * 0.005;
      targetRotation.current.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, targetRotation.current.x)
      );

      velocity.current.x = deltaY * 0.002; // store "swipe speed"
      velocity.current.y = deltaX * 0.002;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      particleMaterial.uniforms.time.value = time;

      // Apply inertia when not dragging
      if (!isDragging.current) {
        targetRotation.current.x += velocity.current.x;
        targetRotation.current.y += velocity.current.y;

        // Damping
        velocity.current.x *= 0.95;
        velocity.current.y *= 0.95;
      }

      // Smooth interpolation
      currentRotation.current.x +=
        (targetRotation.current.x - currentRotation.current.x) * 0.1;
      currentRotation.current.y +=
        (targetRotation.current.y - currentRotation.current.y) * 0.1;

      const radius = 6.5;
      camera.position.x =
        radius * Math.sin(currentRotation.current.y) * Math.cos(currentRotation.current.x);
      camera.position.y = radius * Math.sin(currentRotation.current.x);
      camera.position.z =
        radius * Math.cos(currentRotation.current.y) * Math.cos(currentRotation.current.x);
      camera.lookAt(0, 0, 0);

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
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);

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
      materialRef.current.uniforms.speedFactor.value = 1.2 + sensorValue / 1.0;
    }
  }, [sensorValue]);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default EmptyParticles;
