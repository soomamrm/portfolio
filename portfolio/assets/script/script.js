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