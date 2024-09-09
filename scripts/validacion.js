document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto

    var formData = new FormData(this);

    fetch('email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('form-message').innerHTML = data;
        document.getElementById('form-message').style.display = 'block';
        
        // Solicitar permiso para enviar notificaciones si aún no se ha otorgado
        if (Notification.permission === 'default' || Notification.permission === 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    mostrarNotificacion();
                }
            });
        } else if (Notification.permission === 'granted') {
            mostrarNotificacion();
        }
    })
    .catch(error => console.error('Error:', error));
});

function mostrarNotificacion() {
    const notification = new Notification('Formulario enviado', {
        body: 'El formulario se ha enviado correctamente.',
        icon: 'ruta_a_icono.png' // Ruta a un ícono si tienes uno
    });
}
