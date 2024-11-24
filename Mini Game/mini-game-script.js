const cupsContainer = document.querySelector('.cups-container');
const resultDiv = document.getElementById('result');
const timerDiv = document.getElementById('timer');
const startGameBtn = document.getElementById('start-game-btn');
const shuffleDuration = 8000;
const interval = 300;
const password = "KaideSeManasvi19";
let ballPosition;
let currentPositions = [0, 1, 2];

startGameBtn.addEventListener('click', initializeGame);

function initializeGame() {
    cupsContainer.innerHTML = ''; 
    resultDiv.innerHTML = ''; 
    timerDiv.innerHTML = ''; 
    ballPosition = Math.floor(Math.random() * 3); 

    startGameBtn.style.display = 'none';
    currentPositions = [0, 1, 2];

    for (let i = 0; i < 3; i++) {
        const cup = document.createElement('div');
        cup.classList.add('cup');

        const ball = document.createElement('div');
        ball.classList.add('ball');

        if (i === ballPosition) {
            ball.classList.add('hidden-ball');
        }

        cup.appendChild(ball);
        cupsContainer.appendChild(cup);
    }

    revealBall();
}

function revealBall() {
    const ball = document.querySelector('.hidden-ball');

    ball.style.display = 'block'; 
    setTimeout(() => {
        ball.style.display = 'none';
        timerDiv.innerHTML = `Shuffling... ${shuffleDuration / 1000}s`;
        startShuffling();
    }, 2000);
}

function startShuffling() {
    const cups = Array.from(document.querySelectorAll('.cup'));
    const ball = document.querySelector('.hidden-ball');
    let startTime = Date.now();
    let timer = shuffleDuration / 1000;

    ball.style.display = 'none';

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

        const newPositions = shufflePositions();
        applyShuffleAnimation(cups, newPositions);
    }, interval);
}

function shufflePositions() {
    const [i, j] = [
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
    ];

    [currentPositions[i], currentPositions[j]] = [currentPositions[j], currentPositions[i]];

    return currentPositions;
}

function applyShuffleAnimation(cups, positions) {
    cups.forEach((cup, index) => {
        const newPos = positions.indexOf(index);
        cup.style.transform = `translateX(${(newPos - index) * 120}px)`;
    });
}

function enableCupSelection() {
    const cups = document.querySelectorAll('.cup');
    const ball = document.querySelector('.hidden-ball');

    cups.forEach((cup, index) => {
        cup.addEventListener('click', () => handleCupClick(index));
        cup.style.cursor = 'pointer';
    });

    ball.style.display = 'none';
}

function handleCupClick(index) {
    const cups = document.querySelectorAll('.cup');
    const ball = document.querySelector('.hidden-ball');

    cups.forEach(cup => cup.classList.add('lifted'));

    ball.style.display = 'block';

    if (index === ballPosition) {
        resultDiv.innerHTML = `
            🎉 Congratulations! You found the ball!<br>
            Your reward password is: <span>${password}</span>
        `;
    } else {
        resultDiv.innerHTML = `😢 Wrong choice! Try again.`;
    }

    cups.forEach(cup => (cup.style.pointerEvents = 'none'));

    startGameBtn.style.display = 'block'
}
