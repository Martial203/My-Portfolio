let currentIndex = 0;

function createList(items) {
  if (!items || items.length === 0) return '';
  return `<ul class="mb-3">${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function createSection(title, content) {
  if (!content) return '';
  return `<h5 class="border-start border-4 ps-3 mb-2 text-secondary">${title}</h5>${content}`;
}

function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function renderSwipper(images){
  return `${images.map(img => `
    <div class="swiper-slide">
      <img src="${encodeURI(img.replace(/^\//, ''))}" alt="">
    </div>
  `).join("")}`;
}

function linkLabel(p) {
  if (p.url.includes('npmjs.com')) return I18N.t('details.npm');
  if (p.category === 'app') return I18N.t('details.learnMore');
  return I18N.t('details.visit');
}

// withGallery = false re-renders only the texts (used on language change, the images stay the same)
function renderProject(index, withGallery = true) {
  const p = localizedProject(projects[index]);
  const url = p.url || '';
  const gallery = (p.gallery && p.gallery.length) ? p.gallery : [p.coverImage];

  const detailHTML = `
    <div class="portfolio-description bg-white rounded">
      <h2 class="fw-bold mb-4">${p.name}</h2>
      ${createSection(I18N.t('details.description'), p.description ? p.description.trim().split(/\n\s*\n/).map(para => `<p class="mb-3">${para}</p>`).join('') : '')}
      ${createSection(I18N.t('details.features'), createList(p.features))}
      ${createSection(I18N.t('details.responsibilities'), createList(p.responsibilities))}
      ${createSection(I18N.t('details.challenges'), createList(p.challenges))}
      ${createSection(I18N.t('details.solutions'), createList(p.solutions))}
      ${createSection(I18N.t('details.technologies'), p.technologies ? `<p class="fst-italic text-primary">${p.technologies.join(", ")}</p>` : '')}
    </div>
  `;

  const infoHTML = `
    <div class="portfolio-info">
      <h3>${I18N.t('details.info')}</h3>
      <ul>
        <li><strong>${I18N.t('details.category')}</strong> ${p.categoryLabel}</li>
        ${p.client ? `<li><strong>${I18N.t('details.client')}</strong> ${p.client}</li>` : ''}
        ${p.date ? `<li><strong>${I18N.t('details.date')}</strong> ${p.date}</li>` : ''}
        ${url ? `<li><a href="${url}" class="btn-visit align-self-start" target="_blank" rel="noopener">${linkLabel({ ...p, url })} <i class="bi bi-box-arrow-up-right"></i></a></li>` : ''}
      </ul>
    </div>
  `;

  if (withGallery) document.getElementById("swipper").innerHTML = renderSwipper(gallery);
  document.getElementById("project-details").innerHTML = detailHTML;
  document.getElementById("project-info").innerHTML = infoHTML;
  document.title = `${p.name} | Martial NOUNGA`;

  // Disable buttons when needed
  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").disabled = index === projects.length - 1;
}

function goTo(index) {
  currentIndex = index;
  history.replaceState(null, '', `?project=${index}`);
  renderProject(index);

  // Rebuild the gallery slider so it picks up the new project's images
  const slider = document.querySelector('.portfolio-details-slider');
  if (slider && slider.swiper) {
    slider.swiper.destroy(true, true);
    new Swiper(slider, JSON.parse(slider.querySelector('.swiper-config').innerHTML.trim()));
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listeners
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) goTo(currentIndex - 1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < projects.length - 1) goTo(currentIndex + 1);
});

// Initial render
const requested = parseInt(getUrlParam('project'), 10);
currentIndex = Number.isInteger(requested) && requested >= 0 && requested < projects.length ? requested : 0;
renderProject(currentIndex);

document.addEventListener('languagechange', () => renderProject(currentIndex, false));
