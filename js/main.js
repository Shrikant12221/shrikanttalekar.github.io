document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 1500);

  initHero();
  initSkills();
  initProjects();
  initParticles();

  document.querySelector(".cta-btn").onclick = () =>
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
