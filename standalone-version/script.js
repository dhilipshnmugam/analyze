// Animate elements as they enter viewport
class ScrollAnimator {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in, .fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3, .fade-in-delay-4, .fade-in-delay-5');
        this.init();
    }

    init() {
        // Initial setup - remove animations temporarily for manual control
        this.elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
        });

        // Start entrance animations after a brief delay
        setTimeout(() => {
            this.animateElements();
        }, 300);

        this.setupNavDots();
        this.setupSocialBar();
        this.setupScrollIndicator();
        this.setupProductDisplay();
    }

    animateElements() {
        this.elements.forEach((el) => {
            const delay = this.getAnimationDelay(el.className);
            
            setTimeout(() => {
                el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, delay);
        });
    }

    getAnimationDelay(className) {
        if (className.includes('fade-in-delay-1')) return 200;
        if (className.includes('fade-in-delay-2')) return 400;
        if (className.includes('fade-in-delay-3')) return 600;
        if (className.includes('fade-in-delay-4')) return 300;
        if (className.includes('fade-in-delay-5')) return 1500;
        return 0; // fade-in class
    }

    setupNavDots() {
        const dots = document.querySelectorAll('.dot');
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Update active state
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                
                // Update counter
                const counter = document.querySelector('.slide-counter');
                counter.textContent = `${String(index + 1).padStart(2, '0')}/05`;
                
                // Simulate slide change with subtle animation
                this.simulateSlideChange(index);
            });
            
            // Add hover effect
            dot.addEventListener('mouseenter', () => {
                if (!dot.classList.contains('active')) {
                    dot.style.transform = 'scale(1.2)';
                    dot.style.backgroundColor = '#60a5fa';
                }
            });
            
            dot.addEventListener('mouseleave', () => {
                if (!dot.classList.contains('active')) {
                    dot.style.transform = 'scale(1)';
                    dot.style.backgroundColor = '#d1d5db';
                }
            });
        });
    }

    simulateSlideChange(index) {
        const heroSection = document.querySelector('.hero-section');
        const productDisplay = document.querySelector('.product-display');
        
        // Add subtle background color change
        const colors = [
            'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eff6ff 100%)',
            'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f0fdf4 100%)', 
            'linear-gradient(135deg, #fdf4ff 0%, #ffffff 50%, #fdf4ff 100%)',
            'linear-gradient(135deg, #fffbeb 0%, #ffffff 50%, #fffbeb 100%)',
            'linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fef2f2 100%)'
        ];
        
        heroSection.style.background = colors[index];
        
        // Add rotation effect to product display
        if (productDisplay) {
            const rotations = [3, -2, 4, -3, 1];
            const productContainer = productDisplay.querySelector('.product-container');
            productContainer.style.transform = `rotate(${rotations[index]}deg)`;
        }
    }

    setupSocialBar() {
        const socialIcons = document.querySelectorAll('.social-icon');
        
        socialIcons.forEach((icon, index) => {
            // Add click handlers
            icon.addEventListener('click', () => {
                const iconType = icon.classList[1]; // Get the second class (chat, email, etc.)
                this.handleSocialClick(iconType);
            });
            
            // Add subtle entrance animation with stagger
            setTimeout(() => {
                icon.style.opacity = '1';
                icon.style.transform = 'scale(1)';
            }, 1000 + (index * 100));
            
            // Initially hide for entrance animation
            icon.style.opacity = '0';
            icon.style.transform = 'scale(0.8)';
            icon.style.transition = 'all 0.3s ease, opacity 0.5s ease, transform 0.5s ease';
        });
    }

    handleSocialClick(type) {
        const actions = {
            chat: () => console.log('Opening live chat...'),
            whatsapp: () => window.open('https://wa.me/919543910101', '_blank'),
            email: () => window.location.href = 'mailto:info@analyzebiotech.in',
            camera: () => console.log('Opening camera for product demo...'),
            linkedin: () => window.open('https://linkedin.com/company/analyzebiotech', '_blank'),
            youtube: () => window.open('https://youtube.com/@analyzebiotech', '_blank'),
            facebook: () => window.open('https://facebook.com/analyzebiotech', '_blank'),
            twitter: () => window.open('https://twitter.com/analyzebiotech', '_blank')
        };
        
        if (actions[type]) {
            actions[type]();
        }
        
        // Visual feedback
        const icon = document.querySelector(`.social-icon.${type}`);
        icon.style.transform = 'scale(0.95)';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 150);
    }

    setupScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        scrollIndicator.addEventListener('click', () => {
            // Smooth scroll to next section (if exists)
            const nextSection = document.querySelector('.about-section, .products-section, .footer');
            if (nextSection) {
                nextSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Scroll to bottom if no next section
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
        
        // Add hover effect
        scrollIndicator.addEventListener('mouseenter', () => {
            scrollIndicator.style.transform = 'translateX(-50%) scale(1.1)';
        });
        
        scrollIndicator.addEventListener('mouseleave', () => {
            scrollIndicator.style.transform = 'translateX(-50%) scale(1)';
        });
    }

    setupProductDisplay() {
        const productContainer = document.querySelector('.product-container');
        const progressFill = document.querySelector('.progress-fill');
        const stats = document.querySelectorAll('.stat .value');
        
        if (productContainer) {
            // Interactive hover effect
            productContainer.addEventListener('mouseenter', () => {
                productContainer.style.transform = 'rotate(0deg) scale(1.02)';
            });
            
            productContainer.addEventListener('mouseleave', () => {
                productContainer.style.transform = 'rotate(3deg) scale(1)';
            });
        }
        
        // Animate progress bar and stats on load
        setTimeout(() => {
            if (progressFill) {
                progressFill.style.width = '85%';
            }
            
            // Animate stat numbers
            stats.forEach((stat) => {
                const finalValue = stat.textContent;
                const isPercentage = finalValue.includes('%');
                const numericValue = parseInt(finalValue);
                
                this.animateNumber(stat, 0, numericValue, 2000, isPercentage);
            });
        }, 1500);
    }

    animateNumber(element, start, end, duration, isPercentage = false) {
        const startTime = performance.now();
        const suffix = isPercentage ? '%' : '';
        
        const updateNumber = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * easeOut);
            
            element.textContent = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        };
        
        requestAnimationFrame(updateNumber);
    }
}

// Parallax and dynamic effects
class ParallaxController {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        
        // Parallax effect for floating elements
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((el, index) => {
            const speed = 0.2 + (index * 0.1);
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Update social bar and nav dots opacity based on scroll
        const socialBar = document.querySelector('.social-bar');
        const navDots = document.querySelector('.nav-dots');
        const opacity = Math.max(0.3, 1 - (scrolled / window.innerHeight));
        
        if (socialBar) socialBar.style.opacity = opacity;
        if (navDots) navDots.style.opacity = opacity;
    }

    handleMouseMove(e) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const deltaX = (clientX - centerX) / centerX;
        const deltaY = (clientY - centerY) / centerY;
        
        // Subtle parallax for product display
        const productDisplay = document.querySelector('.product-display');
        if (productDisplay) {
            const moveX = deltaX * 10;
            const moveY = deltaY * 10;
            productDisplay.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
        
        // Move floating elements slightly
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((el, index) => {
            const intensity = 0.1 + (index * 0.05);
            const moveX = deltaX * intensity * 20;
            const moveY = deltaY * intensity * 20;
            el.style.transform += ` translate(${moveX}px, ${moveY}px)`;
        });
    }
}

// Performance optimized resize handler
class ResponsiveHandler {
    constructor() {
        this.init();
    }

    init() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
        
        // Initial check
        this.handleResize();
    }

    handleResize() {
        const isMobile = window.innerWidth <= 768;
        
        // Adjust animations for mobile
        if (isMobile) {
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
        }
        
        // Adjust product display for different screen sizes
        const productContainer = document.querySelector('.product-container');
        if (productContainer && isMobile) {
            productContainer.style.transform = 'rotate(0deg)';
        } else if (productContainer) {
            productContainer.style.transform = 'rotate(3deg)';
        }
    }
}

// Advanced interaction controller
class InteractionController {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupTouchGestures();
        this.setupAccessibility();
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            const dots = document.querySelectorAll('.dot');
            const activeDot = document.querySelector('.dot.active');
            const currentIndex = Array.from(dots).indexOf(activeDot);
            
            switch(e.key) {
                case 'ArrowUp':
                    e.preventDefault();
                    if (currentIndex > 0) {
                        dots[currentIndex - 1].click();
                    }
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    if (currentIndex < dots.length - 1) {
                        dots[currentIndex + 1].click();
                    }
                    break;
                case 'Enter':
                case ' ':
                    if (e.target.classList.contains('dot')) {
                        e.preventDefault();
                        e.target.click();
                    }
                    break;
            }
        });
    }

    setupTouchGestures() {
        let startY = 0;
        
        document.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            const endY = e.changedTouches[0].clientY;
            const diff = startY - endY;
            
            // Detect swipe gestures for navigation
            if (Math.abs(diff) > 50) {
                const dots = document.querySelectorAll('.dot');
                const activeDot = document.querySelector('.dot.active');
                const currentIndex = Array.from(dots).indexOf(activeDot);
                
                if (diff > 0 && currentIndex < dots.length - 1) {
                    // Swipe up - next slide
                    dots[currentIndex + 1].click();
                } else if (diff < 0 && currentIndex > 0) {
                    // Swipe down - previous slide
                    dots[currentIndex - 1].click();
                }
            }
        });
    }

    setupAccessibility() {
        // Add ARIA labels and keyboard focus indicators
        const dots = document.querySelectorAll('.dot');
        const socialIcons = document.querySelectorAll('.social-icon');
        
        dots.forEach((dot, index) => {
            dot.setAttribute('tabindex', '0');
            dot.setAttribute('role', 'button');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        });
        
        socialIcons.forEach((icon) => {
            icon.setAttribute('tabindex', '0');
            icon.setAttribute('role', 'button');
            const type = icon.classList[1];
            icon.setAttribute('aria-label', `Open ${type}`);
        });
        
        // Enhanced focus indicators
        document.addEventListener('focusin', (e) => {
            if (e.target.classList.contains('dot') || e.target.classList.contains('social-icon')) {
                e.target.style.outline = '3px solid #3b82f6';
                e.target.style.outlineOffset = '2px';
            }
        });
        
        document.addEventListener('focusout', (e) => {
            if (e.target.classList.contains('dot') || e.target.classList.contains('social-icon')) {
                e.target.style.outline = 'none';
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all controllers
    new ScrollAnimator();
    new ParallaxController();
    new ResponsiveHandler();
    new InteractionController();
    
    // Add loading complete class for additional styling
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2000);
    
    // Console greeting for developers
    console.log('%cAnalyze Biotech Website', 'color: #2563eb; font-size: 18px; font-weight: bold;');
    console.log('%cAdvancing Healthcare with Innovation and Intelligence', 'color: #6b7280; font-size: 14px;');
    console.log('%c🧬 Ready for the future of biotechnology', 'color: #10b981; font-size: 12px;');
});

// Export for potential module usage
window.AnalyzeBiotechApp = {
    ScrollAnimator,
    ParallaxController,
    ResponsiveHandler,
    InteractionController
};