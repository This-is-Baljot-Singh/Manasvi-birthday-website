const cupsContainer = document.querySelector('.cups-container');
const resultDiv = document.getElementById('result');
const timerDiv = document.getElementById('timer');
const startGameBtn = document.getElementById('start-game-btn');
const shuffleDuration = 8000; // Total shuffle duration (6 seconds)
const interval = 300; // Time between each shuffle
const password = "SECRET2024"; // Reward password
let ballPosition;
let currentPositions = [0, 1, 2]; // Track current positions of cups

// Add event listener to the Start Game button
startGameBtn.addEventListener('click', initializeGame);

// Initialize the game
function initializeGame() {
    cupsContainer.innerHTML = ''; // Clear previous game state
    resultDiv.innerHTML = ''; // Clear result
    timerDiv.innerHTML = ''; // Clear timer
    ballPosition = Math.floor(Math.random() * 3); // Randomly place the ball

    // startGameBtn.disabled = true; // Disable button while game is running
    startGameBtn.style.display = 'none';
    currentPositions = [0, 1, 2]; // Reset positions

    // Create 3 cups
    for (let i = 0; i < 3; i++) {
        const cup = document.createElement('div');
        cup.classList.add('cup');

        const ball = document.createElement('div');
        ball.classList.add('ball');

        // Add the ball to the correct cup
        if (i === ballPosition) {
            ball.classList.add('hidden-ball');
        }

        cup.appendChild(ball);
        cupsContainer.appendChild(cup);
    }

    // Reveal the ball for 2 seconds
    revealBall();
}

// Show the ball under the correct cup for 2 seconds
function revealBall() {
    const ball = document.querySelector('.hidden-ball');

    ball.style.display = 'block'; // Temporarily show the ball
    setTimeout(() => {
        ball.style.display = 'none'; // Hide the ball after 2 seconds
        timerDiv.innerHTML = `Shuffling... ${shuffleDuration / 1000}s`;
        startShuffling();
    }, 2000);
}

// Start shuffling the cups
function startShuffling() {
    const cups = Array.from(document.querySelectorAll('.cup'));
    const ball = document.querySelector('.hidden-ball');
    let startTime = Date.now();
    let timer = shuffleDuration / 1000;

    // Ensure the ball stays hidden during shuffling
    ball.style.display = 'none';

    // Display the shuffle timer
    const countdown = setInterval(() => {
        timerDiv.innerHTML = `Shuffling... ${timer}s`;
        timer--;
        if (timer < 1) clearInterval(countdown);
    }, 1000);

    const shuffle = setInterval(() => {
        if (Date.now() - startTime >= shuffleDuration) {
            clearInterval(shuffle);
            timerDiv.innerHTML = '';
            enableCupSelection();
            return;
        }

        // Shuffle positions and update animation
        const newPositions = shufflePositions();
        applyShuffleAnimation(cups, newPositions);
    }, interval);
}

// Shuffle positions and return new positions
function shufflePositions() {
    const [i, j] = [
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
    ];

    // Swap two random positions
    [currentPositions[i], currentPositions[j]] = [currentPositions[j], currentPositions[i]];

    return currentPositions;
}

// Apply animation for shuffling
function applyShuffleAnimation(cups, positions) {
    cups.forEach((cup, index) => {
        // Calculate the movement based on the new positions
        const newPos = positions.indexOf(index);
        cup.style.transform = `translateX(${(newPos - index) * 120}px)`;
    });
}

// Enable cup selection
function enableCupSelection() {
    const cups = document.querySelectorAll('.cup');
    const ball = document.querySelector('.hidden-ball');

    cups.forEach((cup, index) => {
        cup.addEventListener('click', () => handleCupClick(index));
        cup.style.cursor = 'pointer';
    });

    // Ensure the ball remains hidden until cups are lifted
    ball.style.display = 'none';
}

// Handle cup click
function handleCupClick(index) {
    const cups = document.querySelectorAll('.cup');
    const ball = document.querySelector('.hidden-ball');

    // Lift all cups
    cups.forEach(cup => cup.classList.add('lifted'));

    // Reveal the ball
    ball.style.display = 'block';

    // Check if the player's choice matches the ball's position
    if (index === ballPosition) {
        resultDiv.innerHTML = `
            🎉 Congratulations! You found the ball!<br>
            Your reward password is: <span>${password}</span>
        `;
    } else {
        resultDiv.innerHTML = `😢 Wrong choice! Try again.`;
    }

    // Disable further clicks
    cups.forEach(cup => (cup.style.pointerEvents = 'none'));

    startGameBtn.style.display = 'block'
    // Restart the game after a delay
    // setTimeout(() => {
    //     startGameBtn.disabled = false; // Enable Start Game button
    // }, 4000);
}
