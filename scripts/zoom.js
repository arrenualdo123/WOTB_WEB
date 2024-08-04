document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay-img');
    const zoomableImages = document.querySelectorAll('.zoomable');

    zoomableImages.forEach(image => {
        image.addEventListener('click', () => {
            overlayImg.src = image.src;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});
