// Función para traducir texto utilizando la API del servidor
function translateText(text, targetLanguage, callback) {
    fetch('/translate', {  // URL relativa al servidor
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, targetLanguage })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        if (data.translations && data.translations[0] && data.translations[0].text) {
            callback(data.translations[0].text);
        } else {
            console.error('Error en la respuesta de la API:', data);
            callback(text);
        }
    })
    .catch(error => {
        console.error('Error en la llamada a la API:', error);
        callback(text);
    });
}

// Función para actualizar el contenido según el idioma
function updateContent(language) {
    // Seleccionar solo las partes que deben ser traducidas
    const elementsToTranslate = document.querySelectorAll('.description, footer, #cookie-consent p');
    elementsToTranslate.forEach(element => {
        const originalText = element.getAttribute('data-original-text');
        if (originalText) {
            translateText(originalText, language, translatedText => {
                element.innerHTML = translatedText;
            });
        }
    });
}

// Función para inicializar las traducciones
function initTranslations() {
    // Guardar el texto original en un atributo data
    const elementsToTranslate = document.querySelectorAll('.description, footer, #cookie-consent p');
    elementsToTranslate.forEach(element => {
        if (!element.hasAttribute('data-original-text')) {
            element.setAttribute('data-original-text', element.innerText || element.textContent);
        }
    });
}

// Manejador para el botón de selección de idioma
document.getElementById('lang-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.language-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Función para configurar el idioma y actualizar el contenido
function setLanguage(lang) {
    updateContent(lang);
    document.getElementById('lang-toggle').innerText = lang.toUpperCase();
    document.querySelector('.language-menu').style.display = 'none';
}

// Inicializar traducciones y establecer el idioma inicial
initTranslations();
setLanguage('en');
