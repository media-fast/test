document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const navList = nav.querySelector('.nav-list');
  
  burger.addEventListener('click', () => {
    navList.classList.toggle('show');
    burger.classList.toggle('active');
  });

  // Close menu when clicking a nav link (mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if(navList.classList.contains('show')) {
        navList.classList.remove('show');
        burger.classList.remove('active');
      }
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message, nous vous répondrons rapidement !');
    contactForm.reset();
  });

  // Scroll active nav link update
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 70;
      const sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if(link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});