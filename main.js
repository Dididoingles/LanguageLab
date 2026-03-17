// ===== DARK MODE =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

// Função para aplicar o tema
function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        if (themeIcon) themeIcon.textContent = '🌙';
        if (themeText) themeText.textContent = 'Dark';
    } else {
        document.body.classList.remove('dark-mode');
        if (themeIcon) themeIcon.textContent = '☀️';
        if (themeText) themeText.textContent = 'Light';
    }
}

// Carregar preferência salva
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'true') {
    applyTheme(true);
}

// Event listener para o toggle (se ele existir na página)
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        applyTheme(!isDarkMode);
        localStorage.setItem('darkMode', !isDarkMode);
    });
}

// ===== FUNÇÃO PARA ABRIR JANELAS =====
function openLabWindow(url) {
    window.open(url, '_blank', 'width=1000,height=700,left=200,top=100,resizable=yes,scrollbars=yes');
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    // Aplica animação fade-in em elementos com a classe
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '1';
    });
});
