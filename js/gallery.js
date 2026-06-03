// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.photo-gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('open');
  });
});

document.getElementById('lightbox-close')?.addEventListener('click', () => {
  lightbox.classList.remove('open');
});

lightbox?.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox?.classList.remove('open');
});
