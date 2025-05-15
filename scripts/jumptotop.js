document.addEventListener("DOMContentLoaded", () => {
  const jumpTop = document.querySelector('.jump-top');
  if (!jumpTop) return;

  window.addEventListener('scroll', () => {
    jumpTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
});
