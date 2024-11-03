const button = document.getElementById('toggle');

// Verifica se o modo escuro está ativado e aplica
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Armazena a preferência no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.removeItem('dark-mode');
    }
});
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}