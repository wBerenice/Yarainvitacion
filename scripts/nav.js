


function get(element) {return document.getElementById(element);}


let open = get("navOpen");
let nav = get("nav");
let close = get("navClose");


open.addEventListener('click', function () {
    nav.classList.add('nav-open');

})

close.addEventListener('click', function () {
    nav.classList.remove('nav-open');

})


// ===========================
// CRONOMETRO

// Select HTML elements by their IDs and assign them to variables
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");

// Select elements for flipping sheets and assign them to variables
const dayFlip = document.getElementById("flip-sheet-day");
const hourFlip = document.getElementById("flip-sheet-hour");
const minFlip = document.getElementById("flip-sheet-min");
const secFlip = document.getElementById("flip-sheet-sec");

// Initialize target date and time
const targetDate = new Date("2024-03-30T17:00:00");

// Function to update the countdown timer
const timer = () => {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
        const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display countdown values
        day.innerText = daysRemaining < 10 ? `0${daysRemaining}` : daysRemaining;
        hour.innerText = hoursRemaining < 10 ? `0${hoursRemaining}` : hoursRemaining;
        min.innerText = minutesRemaining < 10 ? `0${minutesRemaining}` : minutesRemaining;
        sec.innerText = secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;
    } else {
        // Countdown has reached the target, clear intervals
        clearInterval(stopTimer);
        clearInterval(stopAnime);
    }
};

// Set an interval to run the timer function every 1000ms (1 second)
const stopTimer = setInterval(timer, 1000);

// Function to toggle the "flip" class for the provided element
const flip_anime = (obj) => {
    obj.classList.add("flip");

    setTimeout(() => {
        obj.classList.remove("flip");
    }, 1000);
};

// Set an interval to run the flip_anime function every 1000ms for seconds flip animation
const stopAnime = setInterval(() => flip_anime(secFlip), 1000);
