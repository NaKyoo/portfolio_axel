// Retour en haut quand la page se load

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Loading screen

window.addEventListener('load', () => {
    const loadingElement = document.getElementById('loading');
    const introText = document.getElementById('intro-text');

    setTimeout(() => {
        introText.classList.add('visible');
    }, 1000);

    setTimeout(() => {
        introText.classList.remove('visible');
        introText.classList.add('hidden');
    }, 5000);

    setTimeout(() => {
        loadingElement.classList.add('hidden');

        document.body.style.overflowY = 'auto';
    }, 6000);
});


// Ajuster les holocrons

document.addEventListener('DOMContentLoaded', function() {
    function ajusterHolocrons() {
        const holocrons = document.querySelectorAll('.holocron');
        holocrons.forEach(holocron => {
            const rect = holocron.getBoundingClientRect();
            if (rect.left < 160) {
                holocron.classList.add('align-right');
            } else {
                holocron.classList.remove('align-right');
            }
        });
    }

    ajusterHolocrons();
    window.addEventListener('resize', ajusterHolocrons);
});


// Nav pour mobile
function toggleMenu() {
    var logo = document.querySelector('.logo');
    var menu = document.querySelector('.menu');
    logo.classList.toggle('active');
    menu.classList.toggle('active');
}


// SCROLL TO TOP BUTTON
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 2000) {
            backToTopButton.style.visibility = 'visible';
            backToTopButton.style.opacity = 1;
        } else {
            backToTopButton.style.opacity = 0;
            setTimeout(() => {
                if (window.scrollY <= 250) {
                    backToTopButton.style.visibility = 'hidden';
                }
            }, 500);
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});










