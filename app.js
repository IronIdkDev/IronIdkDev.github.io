// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.classList.toggle('open');
  nav.classList.toggle('open');

  if (nav.classList.contains('open')) {
    nav.style.opacity = '1';
    nav.style.transform = 'translateY(0)';
  } else {
    nav.style.opacity = '0';
    nav.style.transform = 'translateY(-100%)';
  }
}

// Theme toggle functionality
const themeToggleCheckbox = document.querySelector('.theme-toggle-checkbox');
const body = document.querySelector('body');

// Set default theme to dark
body.classList.add('dark-theme');

themeToggleCheckbox.addEventListener('change', function () {
  if (this.checked) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
});
