document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();
        formStatus.textContent = '';

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        let valid = true;

        if(name === '') {
            showError('name', 'Veuillez saisir votre nom.');
            valid = false;
        }

        if(email === '') {
            showError('email', 'Veuillez saisir votre email.');
            valid = false;
        } else if(!validateEmail(email)) {
            showError('email', 'Veuillez saisir un email valide.');
            valid = false;
        }

        if(message === '') {
            showError('message', 'Veuillez saisir un message.');
            valid = false;
        }

        if(valid) {
            formStatus.style.color = '#007700';
            formStatus.textContent = 'Merci pour votre message. Nous vous contacterons bientôt!';
            form.reset();
        }
    });

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorSpan = field.nextElementSibling;
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
        field.style.borderColor = '#e74c3c';
    }

    function clearErrors() {
        const errorSpans = document.querySelectorAll('.error-message');
        errorSpans.forEach(span => {
            span.textContent = '';
            span.style.display = 'none';
        });
        ['name', 'email', 'message'].forEach(id => {
            document.getElementById(id).style.borderColor = '#ccc';
        });
    }

    function validateEmail(email) {
        // Simple email regex
        const re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
        return re.test(email.toLowerCase());
    }
});
