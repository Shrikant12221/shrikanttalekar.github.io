function initSkills() {
  const canvas = document.getElementById("skills-canvas");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth/canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

  renderer.setSize(canvas.clientWidth, 300);
  camera.position.z = 5;

  const skills = ["Python", "DSA", "AI", "ML"];
  skills.forEach((_, i) => {
    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: i % 2 ? 0x9d4edd : 0x00d4ff })
    );
    orb.position.x = (i - 1.5) * 2;
    scene.add(orb);
  });

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}
