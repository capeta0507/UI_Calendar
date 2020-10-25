let date = new Date();
// let newDay = new Date(2019,1,29)
// console.log('newday', newDay)
// console.log('星期', newDay.getDay())
// console.log('date', date);
let this_year = date.getFullYear()
// console.log(date.getFullYear());
let renderCalendar = () => {
    // console.log('date', date)
    date.setDate(1);
    // date.setYear(2019);
    // date.setMonth(5);
    // console.log(date.getDay())
    // console.log('date', date);

    // 本月最後一天
    let current_lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();
    // console.log('本月 lastDay', current_lastDay);
    
    // 本月1號星期
    let firstDayIdx = date.getDay();
    if(firstDayIdx == 0){
        firstDayIdx = 7;
    }
    // console.log('本月1號星期', firstDayIdx);

    // 上個月最後一日
    let prevLastDay = new Date(date.getFullYear(),date.getMonth(), 0).getDate();
    // console.log('上月 lastDay', prevLastDay);

    // 本月月底星期
    let lastDayIdx = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDay();
    // console.log('本月月底星期', lastDayIdx);

    // 下個月預留天數
    let nextDays = 7 - lastDayIdx;
    // console.log('下個月剩餘天數', nextDays);

    let months = [
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
    // console.log('this_year', this_year);
    // console.log('myThisYear', myThisYear);
    // myThisYear = myThisYear[3]
    document.getElementById('myYear').innerHTML = myThisYear;

    let days = ''

    console.log('firstDayIdx', firstDayIdx)
    for(let x = (firstDayIdx - 1); x>0;x--){
        days += `<div class="prevMonth">${prevLastDay - x + 1}</div>`
    }

    for(let i = 1;i <= current_lastDay;i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth() && myThisYear == this_year){
            days += `<div class="current-date">${i}</div>`
        } else {
            days += `<div>${i}</div>`
        }
    }

    for(let y = 1;y <= nextDays;y++){
        if(nextDays !== 7){
            days += `<div class="nextMonth">${y}</div>`;
        }
        // monthDays.innerHTML = days;
    }
    $('#calendar-date-div').html(days)
    // console.log(monthDays)
}

$('.previos-month').on('click', function(){
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})

$('.next-month').on('click', function(){
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})

renderCalendar();