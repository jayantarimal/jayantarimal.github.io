// JavaScript to handle theme toggle
const themeToggleIcon = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Set the initial theme based on localStorage
document.documentElement.classList.toggle('dark', currentTheme === 'dark');

themeToggleIcon.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});