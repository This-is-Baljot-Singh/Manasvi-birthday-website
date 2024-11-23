document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const validNames = ["Manasvi Singh", "Shinchan"];
    const validPassword = "2005-11-26"; 

    if (validNames.includes(name) && password === validPassword) {
        alert(`Welcome, ${name}!`);
        window.location.href = "main.html";
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Invalid name or password. Please try again.";
    }
});