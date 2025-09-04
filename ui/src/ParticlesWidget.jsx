import * as THREE from "three";

export default function startWidget() {
  const container = document.getElementById("three-widget");
  if (!container) return;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111122);

  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 4;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const particles = new THREE.Points(
    new THREE.BufferGeometry().setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        Array.from({ length: 2000 * 3 }, () => (Math.random() - 0.5) * 5),
        3
      )
    ),
    new THREE.PointsMaterial({ color: 0x44aa88, size: 0.03 })
  );
  scene.add(particles);

  function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.002;
    renderer.render(scene, camera);
  }
  animate();
}
