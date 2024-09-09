const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Aquí puedes guardar los datos del registro en localStorage o enviarlos a tu servidor
    // Por simplicidad, solo redirigimos a la página de inicio de sesión
    container.classList.remove("active");
});

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Aquí puedes validar los datos del inicio de sesión
    // Por simplicidad, redirigimos a la página design.html
    window.location.href = 'panel.html';
});
