window.onload = () => {

    let pomoTitle = document.getElementById("pills-pomo-tab");
    let short_breakTitle = document.getElementById("pills-short-tab");
    let long_breakTitle = document.getElementById("pills-long-tab");

    let pomoTime = 25;
    let shortTime = 5;
    let longTime = 10;
    let seconds = "00";

    document.getElementById("minutes").innerHTML = pomoTime;
    document.getElementById("seconds").innerHTML = seconds;
    pomoTitle.classList.remove('active')
    pomoTitle.setAttribute('aria-selected', 'false');

    short_breakTitle.classList.add('active')
    short_breakTitle.setAttribute('aria-selected', 'true');
}