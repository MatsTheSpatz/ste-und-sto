// Nav: shadow on scroll + mobile burger
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Gallery lightbox
const grid = document.getElementById('galerieGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentIndex = 0;
let images = [];

if (grid) {
  images = Array.from(grid.querySelectorAll('.galerie__item img'));

  grid.addEventListener('click', e => {
    const item = e.target.closest('.galerie__item');
    if (!item) return;
    currentIndex = parseInt(item.dataset.index, 10);
    openLightbox(currentIndex);
  });
}

function openLightbox(index) {
  const img = images[index];
  if (!img) return;
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox(currentIndex);
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', showNext);
lightboxPrev.addEventListener('click', showPrev);

// Close on backdrop click
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});
