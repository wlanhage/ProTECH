


document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


document.querySelector('.toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const slider = document.querySelector('.toggle-slider');

    if (slider.style.left === '7px' || slider.style.left === '') {
        slider.style.left = '31px'; // Move slider to the right
    } else {
        slider.style.left = '7px'; // Move slider back to the left
    }
});