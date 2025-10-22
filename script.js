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
    
    // Nettoyer tous les états actifs
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Définir le lien actif selon la page courante
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Gestion spéciale pour la page d'accueil
        if (currentPage === '' || currentPage === 'index.html' || currentPage === 'Portfolio') {
            if (href === 'index.html' || href === '#accueil') {
                link.classList.add('active');
            }
        } else if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// Appeler la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Effet de scroll sur l'en-tête
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animation d'apparition des éléments au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les sections pour l'animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Effet de parallaxe léger sur les projets
document.addEventListener('scroll', function() {
    const projects = document.querySelectorAll('.project');
    const scrolled = window.pageYOffset;
    
    projects.forEach((project, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        project.style.transform = `translateY(${yPos}px)`;
    });
});

// Animation des compétences au survol
document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('#competences li');
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
        skill.classList.add('animate-in');
    });
});