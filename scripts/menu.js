document.addEventListener("DOMContentLoaded", function() {
    var menuHamburguesa = document.getElementById("menuHamburguesa");
    var hamburgerIcon = document.getElementById("hamburgerIcon");
    var hamburgerDropdown = document.getElementById("hamburgerDropdown");

    hamburgerIcon.addEventListener("click", function() {
        if (hamburgerDropdown.style.display === "block") {
            hamburgerDropdown.style.display = "none";
        } else {
            hamburgerDropdown.style.display = "block";
        }
    });

    // Cierra el menú si se hace clic fuera de él
    window.addEventListener("click", function(event) {
        if (!menuHamburguesa.contains(event.target)) {
            hamburgerDropdown.style.display = "none";
        }
    });
});
