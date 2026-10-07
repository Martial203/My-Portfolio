/**
* Template Name: MyResume
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  let typedInstance = null;

  function initTyped() {
    if (!selectTyped) return;
    if (typedInstance) typedInstance.destroy();
    const typed_strings = selectTyped.getAttribute('data-typed-items').split(',');
    typedInstance = new Typed('.typed', {
      strings: typed_strings.map(item => item.trim()),
      loop: true,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2200
    });
  }
  initTyped();
  // i18n.js swaps data-typed-items when the language changes
  document.addEventListener('languagechange', initTyped);

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter === 'function' && document.querySelector('.purecounter')) {
    new PureCounter();
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    // Cards have a fixed media aspect ratio, so the layout does not depend on
    // (lazy-loaded) images and Isotope can start right away
    const container = isotopeItem.querySelector('.isotope-container');
    let initIsotope = new Isotope(container, {
      itemSelector: '.isotope-item',
      layoutMode: layout,
      filter: filter,
      sortBy: sort
    });
    window.addEventListener('load', () => initIsotope.layout());

    // "Show more": only the first projects of the active filter are displayed until expanded
    const showMoreBtn = isotopeItem.querySelector('.portfolio-show-more');
    let activeFilter = filter;
    let expanded = false;
    const visibleLimit = () => window.innerWidth < 768 ? 6 : 9;

    function applyFilter() {
      let matched = 0;
      container.querySelectorAll('.isotope-item').forEach(el => {
        const matches = activeFilter === '*' || el.matches(activeFilter);
        if (matches) matched++;
        el.dataset.show = matches && (expanded || matched <= visibleLimit()) ? '1' : '0';
      });
      initIsotope.arrange({ filter: '[data-show="1"]' });
      if (showMoreBtn) {
        const hidden = matched - visibleLimit();
        showMoreBtn.hidden = expanded || hidden <= 0;
        showMoreBtn.querySelector('.count').textContent = hidden;
      }
    }

    if (showMoreBtn) {
      showMoreBtn.addEventListener('click', () => {
        expanded = true;
        applyFilter();
      });
    }
    applyFilter();
    // Translated texts change card heights and reset the button label: lay out again
    document.addEventListener('languagechange', applyFilter);

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      // Make filters reachable and usable from the keyboard
      filters.setAttribute('tabindex', '0');
      filters.setAttribute('role', 'button');
      filters.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        activeFilter = this.getAttribute('data-filter');
        expanded = false;
        applyFilter();
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();