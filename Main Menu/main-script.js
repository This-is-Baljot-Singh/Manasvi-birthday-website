const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const birthdayDiv = document.getElementById("birthdayDiv");
const bomb = document.getElementById("bomb");
const mainMenu = document.getElementById("main-menu-container");
const galleryBtn = document.getElementById("gallery-btn");
const gameBtn = document.getElementById("mini-game-btn");

noButton.addEventListener("click", () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", () => {
    bomb.style.display = "block";
    bomb.style.animation = "dropBomb 2s linear forwards";
    let countdown = 5;
    const interval = setInterval(() => {
        countdown--;
        bomb.innerHTML = `<img src="../Assets/sabar karo.jpeg"> ${countdown}...`;
        if (countdown === 0) {
            clearInterval(interval);
            bomb.style.display = "none";
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
