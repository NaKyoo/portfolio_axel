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

// SCROLL
function smoothScrollTo(targetY, duration) {
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    let start;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);
        const easeInOutQuad = percent < 0.5
            ? 2 * percent * percent
            : -1 + (4 - 2 * percent) * percent;
        window.scrollTo(0, startY + diff * easeInOutQuad);
        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            setTimeout(() => {
                const targetY = target.offsetTop - 50;
                smoothScrollTo(targetY, 600);
            }, 400);
        }
    });
});



