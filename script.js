document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menuItems = document.getElementById('menuItems');
    const loginButton = document.getElementById('loginButton');

    hamburger.addEventListener('click', () => {
        menuItems.classList.toggle('show');
    });

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'home.html'; // Change 'home.html' to the actual home page URL
    });
});
