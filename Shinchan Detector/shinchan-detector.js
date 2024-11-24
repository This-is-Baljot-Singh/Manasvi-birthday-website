const questions = [
    { question: "Are you short?", weight: 1 },
    { question: "Do you have a very active imagination?", weight: 1 },
    { question: "Are you known for your mischievous and playful nature?", weight: 2 },
    { question: "Do you have any opposite-gender siblings?", weight: 1 },
    { question: "Do you have a pet dog?", weight: 1 },
    { question: "Are you a very energetic and hyperactive person?", weight: 2 },
    { question: "Do you have a strong bond with your family, especially your parents and siblings?", weight: 1 },
    { question: "Do you have a particular fondness for a certain type of food or snack?", weight: 1 },
    { question: "Are you often found in absurd or ridiculous situations, often caused by your own actions?", weight: 2 },
    { question: "Do you have a strong sense of justice and a desire to protect those you care about?", weight: 1 },
    { question: "Do you have a unique laugh or giggle that is easily recognizable?", weight: 1 },
    { question: "Do you have a habit of imitating the voices and mannerisms of others, often to humorous effect?", weight: 1 },
    { question: "Are you known for your love of watching cartoons?", weight: 1 },
    { question: "Are you known for being a loyal and supportive friend?", weight: 1 },
    { question: "Are you known for your ability to cheer up your friends when they are feeling down?", weight: 1 }
];

const introBox = document.getElementById("intro-box");
const startGameBtn = document.getElementById("start-game-btn");
const questionBox = document.getElementById("question-box");
const questionText = document.getElementById("question");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const resultBox = document.getElementById("result-box");
const resultText = document.getElementById("result");
const reasonText = document.getElementById("reason");
const restartButton = document.getElementById("restart-btn");

let selectedQuestions = [];
let currentQuestionIndex = 0;
let shinchanScore = 0;

function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
}

function loadQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        questionText.textContent = selectedQuestions[currentQuestionIndex].question;
    } else {
        showResult();
    }
}

function showResult() {
    questionBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    if (shinchanScore >= 12) {
        resultText.textContent = "🎉 You are Shinchan!";
        reasonText.textContent = "Mischievous, energetic, and full of life. You're always the center of attention, and your friends and family love you for it!";
    } else if (shinchanScore >= 8) {
        resultText.textContent = "😄 You are almost Shinchan!";
        reasonText.textContent = "You share many of his playful and energetic qualities but might lack a bit of his outrageous mischief.";
    } else if (shinchanScore >= 4) {
        resultText.textContent = "🤔 You are not quite Shinchan.";
        reasonText.textContent = "You might share some qualities with him, but you're definitely more grounded and sensible.";
    } else {
        resultText.textContent = "🙅‍♂️ You are NOT Shinchan!";
        reasonText.textContent = "You might find his antics entertaining, but you're far from being like him.";
    }
}

restartButton.addEventListener("click", () => {
    resultBox.classList.add("hidden");
    introBox.classList.remove("hidden");
});

function startGame() {
    selectedQuestions = getRandomQuestions();
    currentQuestionIndex = 0;
    shinchanScore = 0;
    introBox.classList.add("hidden");
    questionBox.classList.remove("hidden");
    loadQuestion();
}

yesButton.addEventListener("click", () => {
    shinchanScore += selectedQuestions[currentQuestionIndex].weight;
    currentQuestionIndex++;
    loadQuestion();
});

noButton.addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
});

startGameBtn.addEventListener("click", startGame);
