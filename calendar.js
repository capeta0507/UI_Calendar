const date = new Date();

date.setDate(1);
// date.setYear(2019);
// date.setMonth(5);
// console.log(date.getDay())

const monthDays = document.querySelector('#calendar-date-div');

const lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();
// console.log(lastDay)

const prevLastDay = new Date(date.getFullYear(),date.getMonth(), 0).getDate();
// console.log(prevLastDay)

const firstDayIdx = date.getDay() - 1

const lastDayIdx = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDay();
const nextDays = 7 - lastDayIdx

const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
]

document.getElementById('myMonth').innerHTML = months[date.getMonth()]
let myThisYear = date.getFullYear()
// myThisYear = myThisYear[3]
document.getElementById('myYear').innerHTML = myThisYear;

let days = ''

for(let x = firstDayIdx; x>0;x--){
    days += `<div class="prevMonth">${prevLastDay - x + 1}</div>`
}

for(let i = 1;i <= lastDay;i++){
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days += `<div class="current-date">${i}</div>`
    } else {
        days += `<div>${i}</div>`
    }
}

for(let y = 1;y <= nextDays;y++){
    days += `<div class="nextMonth">${y}</div>`;
    // monthDays.innerHTML = days;
}
$('#calendar-date-div').html(days)
console.log(monthDays)