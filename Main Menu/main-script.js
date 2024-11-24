const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const birthdayDiv = document.getElementById("birthdayDiv");
const timer = document.getElementById("timer");
const mainMenu = document.getElementById("main-menu-container");
const galleryBtn = document.getElementById("gallery-btn");
const gameBtn = document.getElementById("mini-game-btn");
const detectorBtn = document.getElementById('detector-btn');
const secretBtn = document.getElementById("secret-btn");
const lockscreenDiv = document.getElementById('lockscreen');
const cancelBtn = document.getElementById('cancel-btn');
const enterBtn = document.getElementById('enter-btn');
const password = document.getElementById("password");
const message = document.getElementById("message");
const validPassword = "Kaide Se Manasvi 19"; 

noButton.addEventListener("click", () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", () => {
    timer.style.display = "block";
    timer.style.animation = "dropBomb 2s linear forwards";
    let countdown = 5;
    const interval = setInterval(() => {
        countdown--;
        timer.innerHTML = `<img src="../Assets/sabar karo.jpeg"> ${countdown}...`;
        if (countdown === 0) {
            clearInterval(interval);
            timer.style.display = "none";
            birthdayDiv.style.animation = "shrinkAndFade 1s forwards"; 
            setTimeout(() => {
                mainMenu.style.display = "block";
                document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/celebration-background-with-colorful-party-flag-falling-confetti_1314-2538.jpg?t=st=1732214267~exp=1732217867~hmac=ef479cc7ecdf6a431c919e56252b869d90f64a9145f1c23f6b9640d6bc4db27f&w=740')";
                mainMenu.style.animation = "enlargeAndDisplay 1s linear forwards";
                birthdayDiv.style.display = "none";
            }, 1000);
        }
    }, 1000);
});

galleryBtn.addEventListener("click", () => {
    window.open("../Gallery/gallery.html", "_blank");
});

gameBtn.addEventListener("click", () => {
    window.open("../Mini%20Game/mini-game.html", "_blank");
});

gameBtn.addEventListener("click", () => {
    window.open("../Shinchan%20Detector/shinchan-detector.html", "_blank");
});

secretBtn.addEventListener("click", () => {
    lockscreenDiv.style.animation = "lockscreenAppear .5s ease-in-out forwards";
});

cancelBtn.addEventListener("click", () => {
    lockscreenDiv.style.animation = "lockscreenDisappear .5s ease-in-out forwards";
    password.value = "";
    message.style.display = "none";
});

enterBtn.addEventListener("click", () => {
    if (password.value === validPassword) {
        message.style.display = "block";
        message.style.color = "white";
        message.style.textShadow = "1px 1px green";
        message.textContent = "Password Verified! Unlocking...";

        setTimeout(() => {
            lockscreenDiv.style.animation = "lockscreenDisappear .5s ease-in-out forwards";
            password.value = "";
            message.style.display = "none";
            window.open("../Secret/secret.html", "_blank");
        }, 1000);
    } else {
        message.style.display = "block";
        message.style.color = "white";
        message.style.textShadow = "1px 1px red";
        message.textContent = "Invalid password. Try again.";
    }
});