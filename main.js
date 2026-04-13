// Menu toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu on link click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if(navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
});

// Form validation & submission simulation
const contactForm = document.getElementById('contact-form');
const formResponse = document.querySelector('.form-response');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  formResponse.textContent = '';

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formResponse.textContent = 'Veuillez remplir tous les champs.';
    formResponse.style.color = '#e74c3c';
    return;
  }

  // Simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formResponse.textContent = 'Veuillez saisir une adresse email valide.';
    formResponse.style.color = '#e74c3c';
    return;
  }

  // Simulate sending...
  formResponse.textContent = 'Envoi en cours...';
  formResponse.style.color = '#f39c12';

  setTimeout(() => {
    formResponse.textContent = 'Merci pour votre message, nous vous répondrons rapidement.';
    formResponse.style.color = '#27ae60';
    contactForm.reset();
  }, 1500);
});