const startButton = document.getElementById('start-game');
const gameContainer = document.getElementById('game-container');
const startContainer = document.getElementById('start-container');
const hint = document.getElementById('hint');
const guessInput = document.getElementById('guess-number');
const submitButton = document.getElementById('submit-guess');
const result = document.getElementById('result');
const congratsContainer = document.getElementById('congrats-container');
const congratsMessage = document.getElementById('congrats-message');
const playAgainButton = document.getElementById('play-again');

let random;
let max;

startButton.addEventListener('click', () => {
    max = document.getElementById('max-number').value;
    if (max) {
        random = Math.floor(Math.random() * max) + 1;
        startContainer.style.display = 'none';
        gameContainer.style.display = 'block';
        result.textContent = '';
        guessInput.value = '';
        hint.textContent = '';
    } else {
        alert('Please enter a maximum number');
    }
});

const checkGuess = () => {
    const guess = guessInput.value;
    if (guess.toLowerCase() === "quit") {
        result.textContent = "User quit the game.";
        gameContainer.style.display = 'none';
        startContainer.style.display = 'block';
    } else if (Number(guess) === random) {
        congratsMessage.textContent = `You are right! Congrats!! Random number was ${random}`;
        gameContainer.style.display = 'none';
        congratsContainer.style.display = 'block';
    } else if (Number(guess) < random) {
        hint.textContent = "Hint: Your guess was too small. Please try again.";
        guessInput.value = '';
    } else if (Number(guess) > random) {
        hint.textContent = "Hint: Your guess was too large. Please try again.";
        guessInput.value = '';
    }
};

submitButton.addEventListener('click', checkGuess);

guessInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

playAgainButton.addEventListener('click', () => {
    congratsContainer.style.display = 'none';
    startContainer.style.display = 'block';
});
