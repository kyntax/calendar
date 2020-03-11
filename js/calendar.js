const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const currentMonthDisplay = document.querySelector("#month");
const dateStrDisplay = document.querySelector("#date_str");
const dayDisplay = document.querySelector(".calendar-days");
const weekdayDisplay = document.querySelector(".calendar-weekdays");

let dt = new Date(); // take your system datetime
const today = new Date();
dt.setDate(1);

const renderHeader = () => {
    currentMonthDisplay.innerHTML = months[dt.getMonth()];
    dateStrDisplay.innerHTML = dt.toDateString();
}
const renderWeekDays = () => {
    let cells = "";
    for (let i = 0; i < 7; i++) {
        cells += `<div>${weekdays[i]}</div>`;
    }
    weekdayDisplay.innerHTML = cells;
}
const renderDate = () => {
    let dayBegin = dt.getDay(); // take day of week
    let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate(); // take number of date of current month
    let prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
    let cells = "";
    for (let i = dayBegin; i > 0; i--) {
        cells += `<div class="prev-date">${prevDate - i + 1}</div>`;
    }
    for (let day = 1; day <= endDate; day++) {
        if (day === today.getDate() && today.getMonth() === dt.getMonth()) {
            cells += `<div class="today">${day}</div>`
        } else {
            cells += `<div>${day}</div>`;
        }
    }
    dayDisplay.innerHTML = cells;
}

const moveBack = () => {
    dt.setMonth(dt.getMonth() - 1);
    renderHeader();
    renderDate();
}
const moveNext = () => {
    dt.setMonth(dt.getMonth() + 1);
    renderHeader();
    renderDate();
}

const init = () => {
    prevBtn.addEventListener("click", moveBack);
    nextBtn.addEventListener("click", moveNext);
    renderHeader();
    renderWeekDays();
    renderDate();
}

init();