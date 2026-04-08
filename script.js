document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formMessage = document.getElementById('formMessage');

    // Simple validation
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if(!name || !email || !message) {
        formMessage.textContent = 'Veuillez remplir tous les champs.';
        formMessage.className = 'form-message error';
        return;
    }

    // Email simple regex validation
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!emailRegex.test(email)) {
        formMessage.textContent = 'L\'adresse email est invalide.';
        formMessage.className = 'form-message error';
        return;
    }

    // Simulate form submission success
    formMessage.textContent = 'Merci pour votre message, nous vous répondrons rapidement.';
    formMessage.className = 'form-message success';

    this.reset();
});