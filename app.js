// 1. On sélectionne tous les boutons et tous les lecteurs
const tousLesBoutons = document.querySelectorAll(".btn-lecture");
const tousLesLecteurs = document.querySelectorAll(".audio-player");

tousLesBoutons.forEach((bouton) => {
  bouton.addEventListener("click", function () {
    // Le lecteur qui correspond au bouton cliqué (celui juste après)
    const lecteurActuel = this.nextElementSibling;

    // --- PHASE DE NETTOYAGE ---
    // On boucle sur tous les lecteurs pour fermer ceux qui sont ouverts
    tousLesLecteurs.forEach((audio) => {
      // Si l'audio qu'on vérifie n'est pas celui qu'on veut lancer...
      if (audio !== lecteurActuel) {
        audio.pause(); // 1. On coupe le son
        audio.currentTime = 0; // 2. (Optionnel) On remet à zéro
        audio.style.display = "none"; // 3. On cache la barre de lecture

        // 4. On réaffiche le bouton rouge associé à cet audio
        // (previousElementSibling = l'élément juste avant l'audio, donc le bouton)
        audio.previousElementSibling.style.display = "";
      }
    });

    // --- PHASE D'ACTIVATION ---
    // Maintenant que tout est propre, on active le nôtre
    this.style.display = "none"; // Cache le bouton cliqué
    lecteurActuel.style.display = "block"; // Affiche le lecteur
    lecteurActuel.play(); // Lance la musique
  });
});
