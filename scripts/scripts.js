// Lorsque la page est pleinement chargée
window.addEventListener('load', () => {
    const loadingElement = document.getElementById('loading'); // Conteneur principal (fond noir)
    const introText = document.getElementById('intro-text'); // Texte de chargement

    // Étape 1 : Afficher uniquement le fond noir pendant 2 secondes
    setTimeout(() => {
        introText.classList.add('visible'); // Montre le texte (H2) après 2 secondes
    }, 1000);

    // Étape 2 : Garder le H2 affiché pendant 3 secondes
    setTimeout(() => {
        introText.classList.remove('visible'); // Cache le texte
        introText.classList.add('hidden'); // Application d'une transition de disparition
    }, 5000); // 2s (fond) + 3s (H2)

    // Étape 3 : Masquer le fond noir après disparition du H2
    setTimeout(() => {
        loadingElement.classList.add('hidden'); // Cache le fond noir
    }, 6000); // 2s (fond) + 3s (H2) + 1s pour disparition texte
});