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

        // Dark mode toggle - Fixed implementation
        const themeToggle = document.getElementById('themeToggle');
        const darkIcon = document.getElementById('darkIcon');
        const lightIcon = document.getElementById('lightIcon');

        // Check for saved user preference or use system preference
        const storedTheme = localStorage.getItem('color-theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedTheme === 'dark' || (!storedTheme && systemDark)) {
            document.documentElement.classList.add('dark');
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
        }

        themeToggle.addEventListener('click', () => {
            // Toggle icons
            darkIcon.classList.toggle('hidden');
            lightIcon.classList.toggle('hidden');

            // Toggle theme
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        });