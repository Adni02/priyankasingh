/**
 * Portfolio Website - Main JavaScript
 * Handles theme switching, navigation, form validation, and interactions
 */

// ===================================
// Theme Management
// ===================================

class ThemeManager {
    constructor() {
        this.STORAGE_KEY = 'portfolio-theme';
        this.DARK_MODE_CLASS = 'dark-mode';
        this.init();
    }

    init() {
        this.loadTheme();
        this.setupThemeToggle();
    }

    loadTheme() {
        // Check localStorage first, then system preference
        const savedTheme = localStorage.getItem(this.STORAGE_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            this.enableDarkMode();
        } else {
            this.disableDarkMode();
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem(this.STORAGE_KEY)) {
                e.matches ? this.enableDarkMode() : this.disableDarkMode();
            }
        });
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    toggleTheme() {
        const isDark = document.body.classList.contains(this.DARK_MODE_CLASS);
        isDark ? this.disableDarkMode() : this.enableDarkMode();
    }

    enableDarkMode() {
        document.body.classList.add(this.DARK_MODE_CLASS);
        localStorage.setItem(this.STORAGE_KEY, 'dark');
        this.updateThemeToggleButton('☀️');
    }

    disableDarkMode() {
        document.body.classList.remove(this.DARK_MODE_CLASS);
        localStorage.setItem(this.STORAGE_KEY, 'light');
        this.updateThemeToggleButton('🌙');
    }

    updateThemeToggleButton(emoji) {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = emoji;
        }
    }
}

// ===================================
// Navigation Management
// ===================================

class NavigationManager {
    constructor() {
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.init();
    }

    init() {
        this.setupMobileToggle();
        this.setupActiveLink();
        this.setupCloseOnLinkClick();
    }

    setupMobileToggle() {
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
                this.updateAriaExpanded();
            });
        }
    }

    setupActiveLink() {
        const links = document.querySelectorAll('.nav-link');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        links.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    setupCloseOnLinkClick() {
        const links = document.querySelectorAll('.nav-link');
        links.forEach((link) => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
                this.updateAriaExpanded();
            });
        });
    }

    updateAriaExpanded() {
        const isOpen = this.navMenu.classList.contains('active');
        this.navToggle.setAttribute('aria-expanded', isOpen);
    }
}

// ===================================
// Contact Form Management
// ===================================

class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (!this.form) return;
        this.setupFormValidation();
        this.setupFormSubmit();
    }

    setupFormValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach((input) => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'name':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Name is required';
                } else if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Name must be at least 2 characters';
                }
                break;

            case 'email':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Email is required';
                } else if (!this.isValidEmail(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email';
                }
                break;

            case 'subject':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Subject is required';
                } else if (value.length < 5) {
                    isValid = false;
                    errorMessage = 'Subject must be at least 5 characters';
                }
                break;

            case 'message':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Message is required';
                } else if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Message must be at least 10 characters';
                }
                break;
        }

        this.displayFieldError(field, isValid, errorMessage);
        return isValid;
    }

    displayFieldError(field, isValid, errorMessage) {
        const errorElement = document.getElementById(`${field.name}Error`);

        if (isValid) {
            field.classList.remove('error');
            if (errorElement) {
                errorElement.classList.remove('show');
            }
        } else {
            field.classList.add('error');
            if (errorElement) {
                errorElement.textContent = errorMessage;
                errorElement.classList.add('show');
            }
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    setupFormSubmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });
    }

    handleFormSubmit() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required]');
        let allValid = true;

        inputs.forEach((input) => {
            if (!this.validateField(input)) {
                allValid = false;
            }
        });

        if (allValid) {
            this.submitForm();
        }
    }

    submitForm() {
        const formMessage = document.getElementById('formMessage');
        
        // Simulate form submission (in production, send to server)
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        console.log('Form submitted:', data);

        // Show success message
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.classList.add('success');
        formMessage.classList.remove('error');

        // Reset form
        this.form.reset();

        // Clear success message after 5 seconds
        setTimeout(() => {
            formMessage.classList.remove('success');
            formMessage.textContent = '';
        }, 5000);
    }
}

// ===================================
// Intersection Observer for Animations
// ===================================

class ScrollAnimationManager {
    constructor() {
        this.init();
    }

    init() {
        const cards = document.querySelectorAll(
            '.achievement-card, .project-card, .experience-item, .education-item, .publication-item'
        );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach((card) => {
            observer.observe(card);
        });
    }
}

// Add fade-in animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Initialize Everything
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new NavigationManager();
    new ContactFormManager();
    new ScrollAnimationManager();
});

// ===================================
// Smooth Scroll Polyfill (for older browsers)
// ===================================

if (!window.CSS || !window.CSS.supports('scroll-behavior', 'smooth')) {
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const href = e.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
}
