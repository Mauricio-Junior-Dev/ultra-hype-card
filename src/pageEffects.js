export function setupPageEffects(root) {
  if (!root) return undefined;
  const cleanups = [];
  const listen = (target, type, callback, options) => {
    target.addEventListener(type, callback, options);
    cleanups.push(() => target.removeEventListener(type, callback, options));
  };
  const menuButton = root.querySelector('.menu-toggle');
  const menu = root.querySelector('#menu');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    menu.classList.remove('open');
  };
  listen(menuButton, 'click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menu.classList.toggle('open', open);
  });
  menu.querySelectorAll('a').forEach(a => listen(a, 'click', closeMenu));
  listen(document, 'keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  listen(window.matchMedia('(min-width: 761px)'), 'change', closeMenu);
  root.querySelector('#year').textContent = new Date().getFullYear();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    root.classList.add('js-motion');
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    root.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
  const header = root.querySelector('.header');
  const progress = root.querySelector('.scroll-progress');
  const heroImage = root.querySelector('.hero-visual > img');
  const comfort = root.querySelector('.comfort');
  const comfortImage = comfort.querySelector('img');
  const mark = root.querySelector('.process-mark');
  let frame = null;
  function updateScroll() {
    const y = window.scrollY;
    const available = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${available > 0 ? y / available : 0})`;
    header.classList.toggle('scrolled', y > 20);
    if (!reducedMotion.matches) {
      if (y < 1000) heroImage.style.transform = `scale(1.06) translateY(${Math.min(y * 0.035, 25)}px)`;
      const rect = comfort.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        comfortImage.style.transform = `translateY(${Math.max(-55, Math.min(0, -(window.innerHeight - rect.top) * 0.045))}px)`;
      }
      mark.style.transform = `rotate(${y * 0.025}deg)`;
    }
    frame = null;
  }
  listen(window, 'scroll', () => {
    if (frame === null) frame = requestAnimationFrame(updateScroll);
  }, { passive: true });
  listen(window, 'resize', updateScroll);
  listen(reducedMotion, 'change', () => {
    if (reducedMotion.matches) {
      root.classList.remove('js-motion');
      observer?.disconnect();
      heroImage.style.transform = '';
      comfortImage.style.transform = '';
      mark.style.transform = '';
    }
    updateScroll();
  });
  updateScroll();
  return () => {
    cleanups.forEach(cleanup => cleanup());
    observer?.disconnect();
    if (frame !== null) cancelAnimationFrame(frame);
    root.classList.remove('js-motion');
    closeMenu();
  };
}
