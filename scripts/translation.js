function updateContent(language) {
    document.querySelectorAll('title, .title, .input-contain, footer, #cookie-consent p, nav ul li a').forEach(function(element) {
        const text = element.innerText || element.textContent;
        translateText(text, language, function(translatedText) {
            element.innerHTML = translatedText;
        });
    });
}

// Función para hacer la llamada a la API de traducción
function translateText(text, targetLanguage, callback) {
    const apiKey = '9c344b47-276a-4fe9-8748-9e97419ccf58:fx'; // Reemplaza con tu clave de API
    const url = 'https://api-free.deepl.com/v2/translate';
    
    const data = new URLSearchParams();
    data.append('auth_key', apiKey);
    data.append('text', text);
    data.append('target_lang', targetLanguage.toUpperCase()); // La API de DeepL usa códigos de idioma en mayúsculas

    fetch(url, {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => {
        if (data.translations && data.translations[0] && data.translations[0].text) {
            callback(data.translations[0].text);
        } else {
            console.error('Error en la respuesta de la API:', data);
            callback(text); // Si hay un error, se muestra el texto original
        }
    })
    .catch(error => {
        console.error('Error en la llamada a la API:', error);
        callback(text); // Si hay un error, se muestra el texto original
    });
}

// Manejo del botón de selección de idioma
document.getElementById('lang-toggle').addEventListener('click', function() {
    var menu = document.querySelector('.language-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Función para cambiar el idioma y actualizar el contenido
function setLanguage(lang) {
    updateContent(lang); // Actualiza el contenido con el nuevo idioma
    document.getElementById('lang-toggle').innerText = lang.toUpperCase(); // Cambia el texto del botón
    document.querySelector('.language-menu').style.display = 'none'; // Oculta el menú después de seleccionar un idioma
}

// Llama a updateContent con el idioma inicial
updateContent('en');
