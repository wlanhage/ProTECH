

/* ---------------- DARK MODE SLIDE KNAPP ---------------- */

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const slider = this.querySelector('.toggle-slider');

            if (slider.style.left === '7px' || slider.style.left === '') {
                slider.style.left = '31px'; 
            } else {
                slider.style.left = '7px';
            }
        });
    });
});

/* ------ SPELA VIDEOR PÅ HOVER (BOX 1, 2, 3) ------ */

document.querySelectorAll('.box1, .box2, .box3').forEach(box => {
    const video = box.querySelector('video');

    box.addEventListener('mouseenter', () => {
        video.play();
    });

    box.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; 
    });
});


/* ------- POPUP EFTER 20 SEK ------ */

window.onload = function() {
    
    setTimeout(function() {
        document.querySelector('.popupSquareContainer').style.display = 'flex';
    }, 20000);

    // Close knapp
    document.querySelector('.closeButton').addEventListener('click', function() {
        document.querySelector('.popupSquareContainer').style.display = 'none';
    });
};
