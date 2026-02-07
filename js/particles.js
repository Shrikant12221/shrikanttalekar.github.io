function initParticles() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.domElement.style.position = "fixed";
  renderer.domElement.style.zIndex = "-2";

  const geometry = new THREE.BufferGeometry();
  const points = [];

  for (let i = 0; i < 800; i++) {
    points.push((Math.random() - 0.5) * 50);
    points.push((Math.random() - 0.5) * 50);
    points.push((Math.random() - 0.5) * 50);
  }

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));

  const material = new THREE.PointsMaterial({ color: 0x00d4ff, size: 0.05 });
  const mesh = new THREE.Points(geometry, material);

  scene.add(mesh);
  camera.position.z = 10;

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.0005;
    renderer.render(scene, camera);
  }
  animate();
}
