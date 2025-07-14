// Mobile menu toggle - Fixed implementation
const hamburgerButton = document.getElementById('hamburgerButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
hamburgerButton.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
hamburgerButton.classList.toggle('is-active');
// Prevent scrolling when menu is open
if (mobileMenu.classList.contains('hidden')) {
document.body.style.overflow = 'auto';
} else {
document.body.style.overflow = 'hidden';
}
});
// Close mobile menu when clicking the close button
closeMobileMenu.addEventListener('click', () => {
mobileMenu.classList.add('hidden');
hamburgerButton.classList.remove('is-active');
document.body.style.overflow = 'auto';
});
// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
link.addEventListener('click', () => {
mobileMenu.classList.add('hidden');
hamburgerButton.classList.remove('is-active');
document.body.style.overflow = 'auto';
});
});
// Close mobile menu when clicking outside the menu content
mobileMenu.addEventListener('click', (e) => {
if (e.target === mobileMenu) {
mobileMenu.classList.add('hidden');
hamburgerButton.classList.remove('is-active');
document.body.style.overflow = 'auto';
}
});
// Theme switching function
function setTheme(theme) {
if (theme === 'dark') {
document.documentElement.classList.add('dark');
localStorage.setItem('theme', 'dark');
// Update desktop buttons
document.getElementById('nightMode').classList.add('opacity-100');
document.getElementById('nightMode').classList.remove('opacity-70');
document.getElementById('dayMode').classList.add('opacity-70');
document.getElementById('dayMode').classList.remove('opacity-100');
// Update mobile buttons
document.getElementById('nightModeMobile').classList.add('opacity-100');
document.getElementById('nightModeMobile').classList.remove('opacity-70');
document.getElementById('dayModeMobile').classList.add('opacity-70');
document.getElementById('dayModeMobile').classList.remove('opacity-100');
} else {
document.documentElement.classList.remove('dark');
localStorage.setItem('theme', 'light');
// Update desktop buttons
document.getElementById('dayMode').classList.add('opacity-100');
document.getElementById('dayMode').classList.remove('opacity-70');
document.getElementById('nightMode').classList.add('opacity-70');
document.getElementById('nightMode').classList.remove('opacity-100');
// Update mobile buttons
document.getElementById('dayModeMobile').classList.add('opacity-100');
document.getElementById('dayModeMobile').classList.remove('opacity-70');
document.getElementById('nightModeMobile').classList.add('opacity-70');
document.getElementById('nightModeMobile').classList.remove('opacity-100');
}
}
// Initialize theme
if (localStorage.getItem('theme') === 'dark' || 
(!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
setTheme('dark');
} else {
setTheme('light');
}
// Event listeners for desktop theme switcher
document.getElementById('dayMode').addEventListener('click', () => setTheme('light'));
document.getElementById('nightMode').addEventListener('click', () => setTheme('dark'));
// Event listeners for mobile theme switcher
document.getElementById('dayModeMobile').addEventListener('click', () => setTheme('light'));
document.getElementById('nightModeMobile').addEventListener('click', () => setTheme('dark'));
// Smooth scroll function
function smoothScroll(target) {
const element = document.querySelector(target);
if (element) {
const headerHeight = document.querySelector('header').offsetHeight;
const elementPosition = element.getBoundingClientRect().top;
const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
window.scrollTo({
top: offsetPosition,
behavior: 'smooth'
});
}
}
// Add event listeners to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const target = this.getAttribute('href');
smoothScroll(target);
// Close mobile menu if open
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenu.classList.contains('hidden') === false) {
mobileMenu.classList.add('hidden');
}
});
});
// Back to top button functionality
const backToTopButton = document.getElementById('backToTop');
// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
if (window.pageYOffset > 300) {
backToTopButton.classList.add('show');
} else {
backToTopButton.classList.remove('show');
}
});
// Smooth scroll to top when clicked
backToTopButton.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});