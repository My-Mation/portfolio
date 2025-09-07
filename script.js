
// Confetti + Sound Button
const button = document.getElementById('celebrateBtn');
const sound = document.getElementById('confettiSound');

button.addEventListener('click', () => {
    // Play sound
    sound.currentTime = 0;
    sound.play();

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
});
