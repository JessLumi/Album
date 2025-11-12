console.log("Le JavaScript est bien connecté !");



document.addEventListener('DOMContentLoaded', () => {
    const blockDroite = document.querySelector('.block-droite');
    const monAlbum = document.getElementById('monAlbum');

    if (monAlbum && blockDroite) {
        monAlbum.addEventListener('click', (event) => {
          event.stopPropagation();
            // 1. Déclenche l'apparition/disparition du vinyle
            monAlbum.classList.toggle('ouvert');
            
            // 2. Déclenche la translation du bloc parent (.block-droite)
            blockDroite.classList.toggle('active'); 
        });
    }
    // L'ancien code utilisant 'image' n'est plus nécessaire ici.
});