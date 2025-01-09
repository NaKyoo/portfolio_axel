window.addEventListener('DOMContentLoaded', () => {
    // Sélectionne les éléments principaux
    const opening = document.querySelector('.star-wars-opening');
    const mainContent = document.getElementById('main-content');

    // Ajoute un délai pour attendre la fin de l'animation
    setTimeout(() => {
        // Supprime ou masque l'opening
        opening.style.display = 'none';

        // Affiche le contenu principal
        mainContent.classList.remove('hidden');
    }, 3000); // 3000ms correspond à la durée de l'animation CSS (3s)
});