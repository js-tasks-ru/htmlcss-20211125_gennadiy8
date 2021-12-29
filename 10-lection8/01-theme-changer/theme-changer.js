const changer = document.getElementById('theme-changer');
const html = document.documentElement;

if (changer) {
    changer.addEventListener('change', function() {
        html.toggleAttribute('data-theme-dark');
    });
}
