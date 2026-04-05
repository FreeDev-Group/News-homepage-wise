const navToggle = document.querySelector('.mobile-nav-toggle');
  const primaryNav = document.querySelector('.primary-navigation');

  navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
      primaryNav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
      primaryNav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
    }
  });
  const observerOptions = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } 
    });
  }, observerOptions);
  
  document.querySelectorAll('.hero, .new-articles, .list-item').forEach(section => {
    observer.observe(section);
  });
  