// Typewriter effect for words
document.addEventListener("DOMContentLoaded", function() {
    const words = ["JOURNEY", "ADVENTURE", "EXPERIENCE"];
    let wordIndex = 0;
    const wordElement = document.getElementById("dynamic-word");

    function typeWord(word) {
        let currentCharIndex = 0;
        const typingSpeed = 150; // Speed of typing effect
        const delayBetweenWords = 1500; // Delay before switching to the next word

        function typeNextChar() {
            if (currentCharIndex < word.length) {
                wordElement.innerHTML = word.slice(0, currentCharIndex + 1);
                currentCharIndex++;
                setTimeout(typeNextChar, typingSpeed);
            } else {
                setTimeout(() => {
                    wordIndex = (wordIndex + 1) % words.length;
                    eraseWord();
                }, delayBetweenWords);
            }
        }

        typeNextChar();
    }

    function eraseWord() {
        let currentCharIndex = wordElement.innerHTML.length;
        const erasingSpeed = 100; // Speed of erasing effect

        function eraseNextChar() {
            if (currentCharIndex > 0) {
                wordElement.innerHTML = wordElement.innerHTML.slice(0, currentCharIndex - 1);
                currentCharIndex--;
                setTimeout(eraseNextChar, erasingSpeed);
            } else {
                typeWord(words[wordIndex]);
            }
        }

        eraseNextChar();
    }

    typeWord(words[wordIndex]); // Start the effect
});

// Script for toggling the navbar
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle the active class on nav
});

// Carousel functionality with faster scroll speed
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');

    leftButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -900, behavior: 'smooth' });
    });
    
    rightButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 900, behavior: 'smooth' });
    });
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select all sections that you want to animate
    const sections = document.querySelectorAll('.about-section, .skills-section, .ambitions-section, .project-section, .contact-section');
  
    // Create an IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a class when the section comes into view
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target); // Stop observing after it has appeared
        }
      });
    }, {
      threshold: 0.25 // Trigger when 25% of the section is visible (so it triggers earlier)
    });
  
    // Observe each section
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
  
