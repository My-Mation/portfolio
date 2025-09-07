
// Confetti + Sound Button
const button = document.getElementById('celebrateBtn');
const sound = document.getElementById('confettiSound');

button.addEventListener('click', () => {
    // Play sound
    sound.currentTime = 0;
    sound.play();

    // Shake effect
    document.body.classList.add('shake');
    setTimeout(() => {
        document.body.classList.remove('shake');
    }, 500);

    // Initial burst of confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Rain effect
    let duration = 2000; // 2 seconds
    let animationEnd = Date.now() + duration;

    const confettiRain = () => {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: Math.random() * 0.2 }
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 - Math.random() * 0.2 }
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(confettiRain);
        }
    };

    confettiRain();
});

// Font Resize on Mobile
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 768) {
        document.documentElement.style.fontSize = "45%"; // from 55% → 45%

        document.querySelectorAll("h1").forEach(el => el.style.fontSize = "2.2rem");
        document.querySelectorAll("h2").forEach(el => el.style.fontSize = "1.8rem");
        document.querySelectorAll("h3").forEach(el => el.style.fontSize = "1.6rem");
        document.querySelectorAll("h4").forEach(el => el.style.fontSize = "1.4rem");
        document.querySelectorAll("p").forEach(el => el.style.fontSize = "1.5rem");
        document.querySelectorAll("button, .btn, .gradient-btn").forEach(el => el.style.fontSize = "1.6rem");
        document.querySelectorAll(".navbar a").forEach(el => el.style.fontSize = "1.6rem");
        document.querySelectorAll(".social-icons a").forEach(el => el.style.fontSize = "2rem");
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });

    // Typing animation for home heading
    const typingText = document.getElementById('typing-text');
    const fullText = "Hi, It's Deb";
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < fullText.length) {
            typingText.innerHTML += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 150);
        } else {
            // After typing, add the span to "Deb"
            typingText.innerHTML = typingText.innerHTML.replace('Deb', '<span>Deb</span>');
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 500);

    // Create floating particles
    const particlesContainer = document.getElementById('particles');
    const numParticles = 50;

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }

    // Header background change on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0,0,0,0.9)';
        } else {
            header.style.background = 'rgba(0,0,0,0.2)';
        }
    });
});
