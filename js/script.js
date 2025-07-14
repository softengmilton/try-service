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

    // Theme switcher functionality
    const dayMode = document.getElementById('dayMode');
    const nightMode = document.getElementById('nightMode');

    // Set initial state
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        nightMode.classList.add('opacity-100');
        dayMode.classList.add('opacity-70');
    } else {
        document.documentElement.classList.remove('dark');
        dayMode.classList.add('opacity-100');
        nightMode.classList.add('opacity-70');
    }

    // Day mode click handler
    dayMode.addEventListener('click', () => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        dayMode.classList.add('opacity-100');
        nightMode.classList.remove('opacity-100');
        dayMode.classList.remove('opacity-70');
        nightMode.classList.add('opacity-70');
    });

    // Night mode click handler
    nightMode.addEventListener('click', () => {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        nightMode.classList.add('opacity-100');
        dayMode.classList.remove('opacity-100');
        nightMode.classList.remove('opacity-70');
        dayMode.classList.add('opacity-70');
    });