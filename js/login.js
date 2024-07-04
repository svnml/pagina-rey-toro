document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usuarioPredefinido = [
        { username: 'Stagnaro', password: 'Papipaolo' },
        { username: 'usuario', password: 'Contraseña' }
    ];

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = usuarioPredefinido.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = 'pedidos.html';
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Usuario o contraseña incorrectos !';
        errorMessage.style.display = 'block';
    }
});