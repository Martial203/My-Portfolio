let currentIndex = 0;

function createList(items) {
  return `<ul class="mb-3">${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function renderSwipper(images){
  return `${images.map(img => `
    <div class="swiper-slide">
      <img src="${img}" alt="">
    </div>
  `).join("")}`;
}

function renderProject(index) {
  const p = projects[index];

  const detailHTML = `
    <div class="portfolio-description bg-white rounded">
      <h2 class="fw-bold mb-4">${p.name}</h2>
      <h5 class="border-start border-4 ps-3 mb-2 text-secondary">Description</h5>
      <p class="mb-3">${p.description}</p>
      <h5 class="border-start border-4 ps-3 mb-2 text-secondary">Features</h5>
      ${createList(p.features)}
      <h5 class="border-start border-4 ps-3 mb-2 text-secondary">Responsibilities</h5>
      ${createList(p.responsibilities)}
      <h5 class="border-start border-4 ps-3 mb-2 text-secondary">Challenges</h5>
      ${createList(p.challenges)}
      <h5 class="border-start border-4 ps-3 mb-2 text-secondary">Solutions</h5>
      ${createList(p.solutions)}
      <h5 class="border-start border-4 ps-3 mb-2 text-secondary">Technologies</h5>
      <p class="fst-italic text-primary">${p.technologies.join(", ")}</p>
    </div>
  `;

  const infoHTML = `
    <div class="portfolio-info">
      <h3>Project information</h3>
      <ul>
        <li><strong>Category</strong> ${p.categoryLabel}</li>
        <li><strong>Client</strong> ${p.client}</li>
        <li><strong>Project date</strong> ${p.date}</li>
        <li><strong>Project URL</strong> <a href="${p.url}" target="_blank">${p.url}</a></li>
        <li><a href="${p.url}" class="btn-visit align-self-start" target="_blank">Visit Website</a></li>
      </ul>
    </div>
  `;

  document.getElementById("swipper").innerHTML = renderSwipper(p.gallery);
  document.getElementById("project-details").innerHTML = detailHTML;
  document.getElementById("project-info").innerHTML = infoHTML;

  // Disable buttons when needed
  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").disabled = index === projects.length - 1;
}

// Event listeners
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderProject(currentIndex);
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < projects.length - 1) {
    currentIndex++;
    renderProject(currentIndex);
  }
});

// Initial render
currentIndex = getUrlParam('project');
renderProject(currentIndex);