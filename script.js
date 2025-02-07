let count = 0;
const countElement = document.getElementById('count');

function updateDisplay() {
    countElement.textContent = count;
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}