
let lastScrollTop = window.scrollY;
const line = document.getElementById('line');
let currentWidth = 0;

window.addEventListener('scroll', () => {
const scrollTop = window.scrollY;

if (scrollTop > lastScrollTop) {
    // Scroll vers le bas : étirer la ligne
    currentWidth = Math.min(currentWidth + 5, 95); // max 95%
} else if (scrollTop < lastScrollTop) {
    // Scroll vers le haut : rétracter la ligne
    currentWidth = Math.max(currentWidth - 5, 0); // min 0%
}

line.style.width = currentWidth + '%';
lastScrollTop = scrollTop;
});

