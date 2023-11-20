




document.querySelector('.toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const slider = document.querySelector('.toggle-slider');

    if (slider.style.left === '7px' || slider.style.left === '') {
        slider.style.left = '31px'; // Move slider to the right
    } else {
        slider.style.left = '7px'; // Move slider back to the left
    }
});

document.querySelectorAll('.box1, .box2, .box3').forEach(box => {
    const video = box.querySelector('video');

    box.addEventListener('mouseenter', () => {
        video.play();
    });

    box.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset the video to the start
    });
});
