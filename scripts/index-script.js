document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');

    // Scroll detection to show/hide footer
    window.addEventListener('scroll', () => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        console.log(`Scrollable Height: ${scrollableHeight}, Scrolled: ${scrolled}`);

        if (scrolled >= scrollableHeight - 10) { // Ajuste de margen
            console.log('Footer should be shown');
            footer.style.display = 'block';
        } else {
            console.log('Footer should be hidden');
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

