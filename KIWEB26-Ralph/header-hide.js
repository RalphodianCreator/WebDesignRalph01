let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    header.classList.add('header-hidden');
  } else {
    
    header.classList.remove('header-hidden');
  }
  lastScrollY = window.scrollY;
});
