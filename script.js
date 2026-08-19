/* Sticky navigation and simple accessible mobile menu. */
      const header = document.querySelector('.site-header');
      const menuToggle = document.querySelector('.menu-toggle');
      const menu = document.querySelector('.nav-links');
      const refreshHeader = () => header.classList.toggle('scrolled', window.scrollY > 10);
      refreshHeader(); window.addEventListener('scroll', refreshHeader, { passive: true });
      menuToggle.addEventListener('click', () => { const isOpen = menu.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(isOpen)); menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu'); document.body.classList.toggle('menu-open', isOpen); });
      menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open menu'); document.body.classList.remove('menu-open'); }));

      /* Fade sections in only once. The CSS reduced-motion rule disables this when requested. */
      const revealObserver = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .12 });
      document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));