let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu icon and navbar
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll events to highlight active section and sticky header
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Corrected: remove the "bx-x" class and close the navbar
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ScrollReveal initialization
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.project-box,.contact form,.skill-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content,.text-box', { origin: 'right' });
ScrollReveal().reveal('.journey', { origin: 'left' });
