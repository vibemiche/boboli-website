(() => {
  'use strict';

  // Il marquee scorre solo quando la traccia è duplicata: senza JS resta la
  // fascia statica del wireframe invece di un loop con il buco a metà.
  document.querySelectorAll('.marquee').forEach((marquee) => {
    const row = marquee.querySelector('.marquee__row');
    const track = row && row.querySelector('.marquee__track');
    if (!track) return;
    row.appendChild(track.cloneNode(true));
    marquee.classList.add('is-animated');
  });

  const burger = document.querySelector('.burger');
  const overlay = document.getElementById('nav-overlay');
  const closeBtn = overlay && overlay.querySelector('.nav-overlay__close');

  if (burger && overlay) {
    const setOpen = (open) => {
      overlay.hidden = !open;
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        const first = overlay.querySelector('a');
        if (first) first.focus();
      } else {
        burger.focus();
      }
    };

    burger.addEventListener('click', () => setOpen(overlay.hidden));
    if (closeBtn) closeBtn.addEventListener('click', () => setOpen(false));
    overlay.addEventListener('click', (e) => {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !overlay.hidden) setOpen(false);
    });
  }
})();
