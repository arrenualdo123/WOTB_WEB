// Inicialización de i18next
i18next.use(i18nextXHRBackend).init({
    lng: 'en', // Idioma inicial
    backend: {
        loadPath: 'locales/{{lng}}.json' 
    },
    fallbackLng: 'en', 
    debug: true
}, function(err, t) {
    updateContent();
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = i18next.t(key);
    });
}

document.getElementById('lang-toggle').addEventListener('click', function() {
    const currentLang = i18next.language;
    const newLang = currentLang === 'en' ? 'es' : 'en';
    i18next.changeLanguage(newLang, function(err, t) {
        if (err) return console.error(err);
        updateContent();
        document.getElementById('lang-toggle').innerText = newLang.toUpperCase();
    });
});


