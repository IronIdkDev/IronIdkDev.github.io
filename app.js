// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Disable Part 1 button
const btnP1 = document.getElementById('btn-p1');
btnP1.addEventListener('click', () => {
  alert('Part 1 is currently disabled');
});

// Redirect to Part 2
const btnP2 = document.getElementById('btn-p2');
btnP2.addEventListener('click', () => {
  window.location.href = 'part2/part2.html';
});

function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.classList.toggle('open');
  nav.classList.toggle('open');

  if (nav.classList.contains('open')) {
    nav.style.transform = 'translateY(0)';
  } else {
    nav.style.transform = 'translateY(-100%)';
  }
}
