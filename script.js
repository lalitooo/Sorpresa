document.querySelector('.button-glow').addEventListener('click', function() {
    const button = this;
    button.classList.add('fade-out'); // Añade la clase de animación

    // Espera a que termine la animación antes de redirigir
    button.addEventListener('animationend', () => {
        window.location.href = 'carta/index.html'; // Redirige a la nueva página
    });
});
