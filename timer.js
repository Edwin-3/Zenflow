document.addEventListener("DOMContentLoaded", () => {

    const defaultTimes = {
        pills_pomodoro: 25 * 60,
        pills_short: 5 * 60,
        pills_long: 10 * 60,
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function updateDisplay(tab) {
        const minutes = Math.floor(defaultTimes[tab] / 60);
        const seconds = defaultTimes[tab] % 60;
        document.querySelector(`#${tab.split('_')[1]} #minutes${capitalizeFirstLetter(tab.split('_')[1])}`).textContent = minutes.toString().padStart(2, '0');
        document.querySelector(`#${tab.split('_')[1]} #seconds${capitalizeFirstLetter(tab.split('_')[1])}`).textContent = seconds.toString().padStart(2, '0');
    }

    // Initialize timer displays
    for (let tab in defaultTimes) {
        updateDisplay(tab);
    }

    // Timer functionality
    let currentInterval;
    let currentTime;

    function startTimer(duration, displayMinutes, displaySeconds) {
        if (currentInterval) clearInterval(currentInterval);

        currentTime = duration;
        currentInterval = setInterval(() => {
            let minutes = Math.floor(currentTime / 60);
            let seconds = currentTime % 60;

            displayMinutes.textContent = minutes.toString().padStart(2, '0');
            displaySeconds.textContent = seconds.toString().padStart(2, '0');

            currentTime--;

            if (currentTime < 0) {
                clearInterval(currentInterval);
            }
        }, 1000);
    }

    // Event listeners for start buttons and input changes
    document.querySelectorAll('.btn.btn-primary').forEach((startButton) => {
        startButton.addEventListener('click', (event) => {
            let tabId = event.target.closest('.tab-pane').id;
            let inputField = event.target.closest('.timer-wrapper').querySelector('input[type="number"]');
            let minutesDisplay = document.querySelector(`#${tabId} #minutes${capitalizeFirstLetter(tabId.split('-')[1])}`);
            let secondsDisplay = document.querySelector(`#${tabId} #seconds${capitalizeFirstLetter(tabId.split('-')[1])}`);

            if (inputField && inputField.value) {
                startTimer(parseInt(inputField.value) * 60, minutesDisplay, secondsDisplay);
            } else {
                startTimer(defaultTimes[`pills_${tabId.split('-')[1]}`], minutesDisplay, secondsDisplay);
            }
        });
    });

    // Event listeners for reset buttons
    document.querySelectorAll('.btn.btn-outline-secondary').forEach((resetButton) => {
        resetButton.addEventListener('click', () => {
            let tabId = resetButton.closest('.tab-pane').id;
            updateDisplay(`pills_${tabId.split('-')[1]}`);
            if (currentInterval) clearInterval(currentInterval);
        });
    });
});
