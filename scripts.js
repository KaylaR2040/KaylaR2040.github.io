function checkIfLittle() {
    const name = document.getElementById('little-name').value.toLowerCase();
    const resultElement = document.getElementById('little-result');
    
    if (name === 'odera') {
        resultElement.innerHTML = "Congratulations!!! You're my little and I look forward to meeting you soon, keep watching the website for new updates and clues to who I am.";
    } else {
        resultElement.innerHTML = "Sorry, you are not my little. Keep watching for more clues!";
    }
}

let timeLeft = 72 * 60 * 60; // 72 hours in seconds
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const days = Math.floor(timeLeft / (60 * 60 * 24));
    const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);

    countdownElement.textContent = `${days} days ${hours} hours ${minutes} minutes`;

    if (timeLeft > 0) {
        timeLeft--;
    }
}

setInterval(updateCountdown, 1000);
