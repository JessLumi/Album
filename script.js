console.log("Le JavaScript est bien connecté !");



document.addEventListener('DOMContentLoaded', () => {
    const blockDroite = document.querySelector('.block-droite');
    const monAlbum = document.getElementById('monAlbum');
    // NOUVEAU : Récupérer l'élément vidéo
    const maVideo = document.getElementById('maVideo'); 
    
    // La durée de transition la plus longue est 1000ms (1s) pour le block-droite.
    // On utilise un délai juste après cette transition.
    const DELAI_AVANT_APPARITION = 1000;
    const DUREE_FADE_OUT = 2000;

    if (monAlbum && blockDroite && maVideo) {
        monAlbum.addEventListener('click', (event) => {
            event.stopPropagation();
            
            const isOuvert = monAlbum.classList.contains('ouvert');

            // Si l'album n'est PAS encore ouvert (il va S'OUVRIR)
            if (!isOuvert) {
                // 1. Déclenche l'apparition du vinyle et le déplacement du bloc parent
                monAlbum.classList.add('ouvert');
                blockDroite.classList.add('active'); 
                
                // 2. Afficher la vidéo après la fin de la transition du block-droite
                setTimeout(() => {
                    maVideo.classList.add('visible'); 
                    maVideo.play();
                }, DELAI_AVANT_APPARITION);

            } else { // Si l'album EST ouvert (il va SE REFERMER)
                // 1. Masquer la vidéo immédiatement (ou avec un très court délai)
                maVideo.pause();
                maVideo.classList.remove('visible');

                // 2. Refermer le vinyle et ramener le bloc parent
                // On met un délai pour que la vidéo se masque AVANT que la pochette ne se referme
                setTimeout(() => {
                    monAlbum.classList.remove('ouvert');
                    blockDroite.classList.remove('active'); 
                }, 2000); // Court délai pour assurer le masquage de la vidéo en premier
            }
        });
    }
});