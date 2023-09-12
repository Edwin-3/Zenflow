window.addEventListener("load", () => {
    const pomo_minutes = document.querySelector("#minutesPomodoro")
    const pomo_seconds = document.querySelector("#secondsPomodoro")
    const pomo_input = document.querySelector("#pomo_input")
    const start = document.getElementById("start");
    const reset = document.getElementById("reset");

    function formatTime(num) {
        return num < 10 ? "0" + num : num;
    }

    pomo_minutes.innerHTML = formatTime(25);
    pomo_seconds.innerHTML = formatTime(0);

    let interval;
    let running = false;

    pomo_input.addEventListener("change", (e) => {
        pomo_minutes.innerHTML = e.target.value;
        if (e.target.value < 0) {
            e.target.value = formatTime(25);
            pomo_minutes.innerHTML = formatTime(25);
        }
    })

    start.addEventListener('click', () => {

        if (!running) {

            clearInterval(interval);
            start.innerHTML = "Pause";
            running = true;
            interval = setInterval(
                () => {
                    let min = parseInt(pomo_minutes.innerHTML);
                    let sec = parseInt(pomo_seconds.innerHTML);

                    if (sec === 0) {
                        min--;
                        sec = 59;
                    }
                    else {
                        sec--;
                    }

                    pomo_minutes.innerHTML = formatTime(min);
                    pomo_seconds.innerHTML = formatTime(sec);

                    if (min === 0 && sec === 0) {
                        clearInterval(interval);
                        pomo_minutes.innerHTML = formatTime(25);
                        pomo_seconds.innerHTML = formatTime(0);
                    }
                }, 1000);

        } else {
            clearInterval(interval);
            start.innerHTML = "Start";
            running = false;
        }


    });

    reset.addEventListener('click', () => {
        clearInterval(interval);
        pomo_minutes.innerHTML = formatTime(25);
        pomo_seconds.innerHTML = formatTime(0);
        start.innerHTML = "Start";
    })
});

