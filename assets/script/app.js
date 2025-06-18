// --- Funkcja dla menu hamburgerowego ---
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// --- Funkcjonalność Dark Mode ---
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggleDesktop = document.getElementById('darkModeToggleDesktop');
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
    const body = document.body;

    // Funkcja do ustawiania motywu
    const setDarkMode = (isDark) => {
        if (isDark) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            darkModeToggleDesktop.checked = true;
            darkModeToggleMobile.checked = true;
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            darkModeToggleDesktop.checked = false;
            darkModeToggleMobile.checked = false;
        }
    };

    // Sprawdź zapisany motyw przy ładowaniu strony
    const savedTheme = localStorage.getItem('theme');
    // Sprawdź preferencje systemowe, jeśli nie ma zapisanego motywu
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }

    // Nasłuchiwanie na kliknięcia przełączników
    darkModeToggleDesktop.addEventListener('change', () => {
        setDarkMode(darkModeToggleDesktop.checked);
    });

    darkModeToggleMobile.addEventListener('change', () => {
        setDarkMode(darkModeToggleMobile.checked);
    });
});