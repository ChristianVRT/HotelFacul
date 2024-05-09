document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('toggle-dark-mode');
    btn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        btn.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
    });
});