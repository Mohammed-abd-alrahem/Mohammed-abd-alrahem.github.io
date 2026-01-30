// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks && window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Form submission handling
    const contactForm = document.getElementById('messageForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name') || 'User';
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
            
            // Reset form
            this.reset();
        });
    }

    // Add animation to skill tags on hover
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Project card interaction
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Demo button alerts (for demo purposes)
    document.querySelectorAll('.project-link.demo').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectTitle = this.closest('.project-card').querySelector('h3').textContent;
            alert(`The live demo for "${projectTitle}" will be available soon!\n\nFor now, you can check the code on GitHub.`);
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.backgroundColor = 'white';
            nav.style.backdropFilter = 'none';
        }
    });

    // Typewriter effect for hero section (optional)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typewriter effect after 1 second
        setTimeout(typeWriter, 1000);
    }

    // Initialize tooltips for skills
    document.querySelectorAll('.skill-tag').forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            const skillName = this.textContent;
            this.setAttribute('title', `Proficient in ${skillName}`);
        });
    });

    // Responsive navigation
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
});

// Page load animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loading animation removal
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 1000);
});

// Add some console styling for fun
console.log('%c👋 Hello! Thanks for checking out my portfolio.', 
    'color: #2563eb; font-size: 18px; font-weight: bold;');

console.log('%cBuilt with ❤️ by Mohammed Abd-alrahim', 
    'color: #10b981; font-size: 14px;');