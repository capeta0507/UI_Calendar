var currMonth = 10
var currYear = 2020


var calendar_Title = document.getElementById('calendar-year-div');
var calendar_Body = document.getElementById('calendar-date-div');

showCalendar(currYear,currMonth);

function showCalendar(){
  var myMonthData = ''
  // 顯示標題
  calendar_Title.innerText = `${currYear}年 / ${currMonth}月`
  
  // 顯示該月月曆 
  // prevMonth 前一個月
  myMonthData += `<div class="prevMonth">28</div>`
  myMonthData += `<div class="prevMonth">29</div>`
  myMonthData += `<div class="prevMonth">30</div>`

  // currentMonth 本月
  myMonthData += `<div>1</div>`
  myMonthData += `<div>2</div>`
  myMonthData += `<div>3</div>`
  myMonthData += `<div>4</div>`

  myMonthData += `<div>26</div>`
  myMonthData += `<div>27</div>`
  myMonthData += `<div>28</div>`
  myMonthData += `<div>29</div>`
  myMonthData += `<div>30</div>`
  myMonthData += `<div>31</div>`

  // lastMonth 次月
  myMonthData += `<div class="nextMonth">1</div>`

  calendar_Body.innerHTML = myMonthData;

}