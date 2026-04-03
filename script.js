// Script pour gérer le formulaire de contact

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Récupération des valeurs
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Validation simple
        if (!name || !email || !message) {
            formMessage.style.color = "red";
            formMessage.textContent = "Veuillez remplir tous les champs.";
            return;
        }

        if (!validateEmail(email)) {
            formMessage.style.color = "red";
            formMessage.textContent = "Veuillez entrer une adresse email valide.";
            return;
        }

        // Simuler un envoi de formulaire
        formMessage.style.color = "green";
        formMessage.textContent = "Envoi en cours...";

        setTimeout(() => {
            formMessage.textContent = "Merci de nous avoir contactés, nous vous répondrons bientôt !";
            form.reset();
        }, 1500);
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
        return re.test(email.toLowerCase());
    }
});