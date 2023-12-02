const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown() {
    const christmas = 25
    // Get the current date
    const today = new Date()
    // Calculate remaining days until Christmas
    const remainingDays = christmas - today.getDate()
    // Display remaining days in countdownDisplay
    countdownDisplay.innerHTML = remainingDays
}

renderCountdown()