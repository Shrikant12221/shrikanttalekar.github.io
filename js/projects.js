function initProjects() {
  const container = document.getElementById("projects-container");

  const projects = [
    { title: "AI Fruit Explainer", desc: "AI-generated videos explaining food benefits." },
    { title: "GenAI Portfolio", desc: "3D portfolio using Three.js" },
    { title: "Data Analysis Mini Project", desc: "Python-based data insights." }
  ];

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    container.appendChild(div);
  });
}
