// Mobile menu logic (fixed version — id matches the HTML)
const menuBtn = document.getElementById('hamburgerToggle');
// script.js (drop-in)
(function(){
  // Sanity: prove the script loaded
  console.log('[Janus] script.js loaded');

  const menuBtn  = document.getElementById('hamburgerToggle');
  const panel    = document.getElementById('mobilePanel');
  const closeBtn = document.getElementById('closeHamburger');
  const overlay  = document.getElementById('blurOverlay');

  // Guard: surface missing IDs
  if(!menuBtn || !panel || !closeBtn || !overlay){
    console.error('[Janus] Missing element(s):', {menuBtn, panel, closeBtn, overlay});
    return;
  }

  // Ensure starting state
  panel.classList.remove('active');
  overlay.classList.remove('active');
  panel.setAttribute('aria-hidden','true');
  menuBtn.setAttribute('aria-expanded','false');

  function openMenu(){
    panel.classList.add('active');
    overlay.classList.add('active');
    panel.setAttribute('aria-hidden','false');
    menuBtn.setAttribute('aria-expanded','true');
    console.log('[Janus] menu: open');
  }
  function closeMenu(){
    panel.classList.remove('active');
    overlay.classList.remove('active');
    panel.setAttribute('aria-hidden','true');
    menuBtn.setAttribute('aria-expanded','false');
    console.log('[Janus] menu: close');
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && panel.classList.contains('active')) closeMenu(); });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    panel.style.transition = 'none';
  }
})();

// Toggle mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.top-links');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });


// Fade-in on scroll
(() => {
  const els = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!('IntersectionObserver' in window) || !els.length) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target); // reveal once
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

  els.forEach(el => io.observe(el));
})();