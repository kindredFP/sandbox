const words = ["javascript", "hangman", "coding", "programmer", "developer"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let attempts = 6;
let guessedLetters = [];
let displayWord = Array(selectedWord.length).fill("_");

document.addEventListener("DOMContentLoaded", () => {
    const wordDisplay = document.getElementById("wordDisplay");
    const message = document.getElementById("message");
    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");
    const attemptsDisplay = document.getElementById("attempts");

    function updateDisplay() {
        wordDisplay.textContent = displayWord.join(" ");
        attemptsDisplay.textContent = `Attempts left: ${attempts}`;
    }

    function checkWin() {
        if (displayWord.join("") === selectedWord) {
            message.textContent = "Congratulations! You won!";
            guessButton.disabled = true;
        }
    }

    function checkLoss() {
        if (attempts === 0) {
            message.textContent = `Game over! The word was "${selectedWord}".`;
            guessButton.disabled = true;
        }
    }

    guessButton.addEventListener("click", () => {
        const guess = guessInput.value.toLowerCase();
        guessInput.value = "";

        if (!guess || guessedLetters.includes(guess)) {
            message.textContent = "Invalid guess or letter already guessed.";
            return;
        }

        guessedLetters.push(guess);

        if (selectedWord.includes(guess)) {
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === guess) {
                    displayWord[i] = guess;
                }
            }
        } else {
            attempts--;
        }

        message.textContent = "";
        updateDisplay();
        checkWin();
        checkLoss();
    });

    updateDisplay();
});