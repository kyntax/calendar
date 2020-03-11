const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const currentMonthDisplay = document.querySelector("#month");
const dateStrDisplay = document.querySelector("#date_str");
const calendarDisplay = document.querySelector(".calendar-days");

let dt = new Date(); // take your system datetime
let today = new Date();

function renderDate() {
    dt.setDate(1);
    let dayBegin = dt.getDay(); // take day of week
    let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate(); // take number of date of current month
    let prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

    dateStrDisplay.innerHTML = dt.toDateString(); 
    currentMonthDisplay.innerHTML = months[dt.getMonth()];

    let cells = "";
    for (x = dayBegin; x > 0; x--) {
        cells += `<div class="prev-date">${prevDate - x + 1}</div>`;
    }
    for (let day = 1; day <= endDate; day++) {
        if (day === today.getDate() && today.getMonth() === dt.getMonth()) {
            cells += `<div class="today">${day}</div>`
        } else {
            cells += `<div>${day}</div>`;
        }
    }
    calendarDisplay.innerHTML = cells;
}
renderDate();
const moveBack = () => {
    dt.setMonth(dt.getMonth() - 1);
    renderDate();
}
const moveNext = () => {
    dt.setMonth(dt.getMonth() + 1);
    renderDate();
}
const nDay = document.querySelectorAll(".calendar-days");
console.log(nDay);
prevBtn.addEventListener("click", moveBack);
nextBtn.addEventListener("click", moveNext);
