document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const dropdownMenu = document.getElementById('hamburger-dropdown');

    hamburgerIcon.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    // Cierra el menú si se hace clic fuera de él
    window.addEventListener('click', function (event) {
        if (!hamburgerIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
