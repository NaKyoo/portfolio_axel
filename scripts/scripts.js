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
    }, 6000);
});

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

function toggleMenu() {
    var logo = document.querySelector('.logo');
    var menu = document.querySelector('.menu');
    logo.classList.toggle('active');
    menu.classList.toggle('active');
}


