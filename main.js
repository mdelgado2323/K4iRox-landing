// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(213, 134, 255, 0.7)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(213, 134, 255, 0.6)';
        header.style.backdropFilter = 'blur(15px)';
    }
});

// Active section highlighting
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);
window.addEventListener('load', highlightActiveSection);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all feature cards and service cards
document.querySelectorAll('.feature-card, .service-card').forEach(card => {
    observer.observe(card);
});

// Parallax effect for hero visual
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Mouse move effect for fluid shape
document.addEventListener('mousemove', (e) => {
    const fluidShape = document.querySelector('.fluid-shape');
    if (fluidShape) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        fluidShape.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Testimonial slider (if multiple testimonials) - DISABLED
// let currentTestimonial = 0;
// const testimonials = document.querySelectorAll('.testimonial-card');

// function showTestimonial(index) {
//     testimonials.forEach((testimonial, i) => {
//         testimonial.style.display = i === index ? 'block' : 'none';
//     });
// }

// // Initialize
// if (testimonials.length > 0) {
//     showTestimonial(0);
    
//     // Auto rotate testimonials
//     if (testimonials.length > 1) {
//         setInterval(() => {
//             currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//             showTestimonial(currentTestimonial);
//         }, 5000);
//     }
// }

// Add subtle hover effects to cards
document.querySelectorAll('.feature-card, .service-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(0)';
    });
});

// Typewriter effect for hero title (DISABLED - removes formatting)
// function typeWriter(element, text, speed = 50) {
//     let i = 0;
//     element.innerHTML = '';
//     
//     function type() {
//         if (i < text.length) {
//             element.innerHTML += text.charAt(i);
//             i++;
//             setTimeout(type, speed);
//         }
//     }
//     
//     type();
// }

// Apply typewriter effect when page loads (DISABLED)
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-content h1');
//     if (heroTitle) {
//         const text = heroTitle.textContent;
//         typeWriter(heroTitle, text);
//     }
// });