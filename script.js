const printButton = document.getElementById('printCv');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

printButton?.addEventListener('click', () => window.print());

menuToggle?.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  mobileNav.hidden = isExpanded;
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});
