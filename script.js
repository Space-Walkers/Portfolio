 // Fonction pour gérer la soumission du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Ici, vous ajouteriez normalement le code pour envoyer les données du formulaire
    // à un serveur. Pour cet exemple, nous allons simplement afficher un message.
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    this.reset(); // Réinitialise le formulaire après soumission
});

// Fonction pour l'effet de défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = 70; // Ajustez cette valeur selon la hauteur de votre en-tête
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Fonction pour mettre en surbrillance la section active dans la navigation
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(section => {
        if (scrollPosition >= section.offsetTop - 100) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Fonction pour mettre en surbrillance le lien actif dans la navigation
function setActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Appeler la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', setActiveNavLink);