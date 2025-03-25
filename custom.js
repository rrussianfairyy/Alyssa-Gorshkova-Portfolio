document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome to Alyssa's Portfolio :)";
    let index = 0;
    const speed = 65; // Typing speed in milliseconds
    const welcomeText = document.getElementById("welcome-text");
    const enterButton = document.getElementById("enter-btn");

    function typeText() {
        if (index < text.length) {
            welcomeText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        } else {
            enterButton.classList.add("show"); // Show the button when typing is done
        }
    }

    typeText(); // Start typing effect

    enterButton.addEventListener("click", enterSite);
});

function enterSite() {
    document.getElementById("intro-screen").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("intro-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";

        // Start particles.js after showing main content
        initParticles();

        // Start text shuffle effect after showing the main content
        shuffleText('title', 'Alyssa Gorshkova');
        shuffleText('subtitle', 'Graphic Designer & Web Developer');
    }, 500); // Wait for fade-out before showing content
}

// Function to shuffle text
function shuffleText(elementId, text) {
    const element = document.getElementById(elementId);
    let originalText = text;
    let symbols = 'Ñ@#X$*$♡⋆✮˚❀⏾⁠♡ ';
    let currentText = text.split('');
    let intervalId;

    function shuffle() {
        for (let i = 0; i < currentText.length; i++) {
            if (Math.random() > 0.5) {
                currentText[i] = symbols.charAt(Math.floor(Math.random() * symbols.length));
            }
        }
        element.innerText = currentText.join('');
    }

    intervalId = setInterval(shuffle, 45);

    setTimeout(() => {
        clearInterval(intervalId);
        element.innerText = originalText;
    }, 1000);
}

// Ensure shuffle happens on hover
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('title').addEventListener('mouseenter', () => shuffleText('title', 'Alyssa Gorshkova'));
    document.getElementById('subtitle').addEventListener('mouseenter', () => shuffleText('subtitle', 'Graphic Designer & Web Developer'));
});

// Function to initialize particles.js
function initParticles() {
    particlesJS("bg", {
        "particles": {
            "number": {
                "value": 400,
                "density": {
                    "enable": true,
                    "value_area": 900
                }
            },
            "color": { "value": "#ffffff" },
            "shape": {
                "type": "circle",
                "stroke": { "width": 0, "color": "#000000" }
            },
            "opacity": {
                "value": 0.3,
                "random": false
            },
            "size": {
                "value": 2,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.3,
                "width": 1
                
            },
            "move": {
                "enable": true,
                "speed": 1.1
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": {
                "grab": { "distance": 150, "line_linked": { "opacity": 1 } }
            }
        },
        "retina_detect": true
    });
}

// Run particles.js on page load in case the user refreshes
window.addEventListener("load", initParticles);
