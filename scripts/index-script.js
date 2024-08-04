document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');

    // Scroll detection to show/hide footer
    window.addEventListener('scroll', () => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if (scrolled >= scrollableHeight - 10) { // Ajuste de margen
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    });

    // Cookie consent handling
    const cookieConsent = document.getElementById('cookie-consent');
    const cookieAcceptButton = document.getElementById('cookie-accept');

    if (!localStorage.getItem('cookies-accepted')) {
        cookieConsent.style.display = 'block';
    }

    cookieAcceptButton.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');
        cookieConsent.style.display = 'none';
    });


});
