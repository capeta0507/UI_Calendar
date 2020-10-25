let date = new Date();
// console.log(date);
var myYear = date.getUTCFullYear();  // 本年份
var myMonth = date.getMonth(); // 本月月份，0~11
// var currDate = date.getDate(); // 日期
// console.log(currYear,currMonth,currDate);

var calendar_Title = document.getElementById('calendar-year-div');
var calendar_Body = document.getElementById('calendar-date-div');

var prevMonthBtn = document.getElementById('previos-month');
var nextMonthBtn = document.getElementById('next-month');

prevMonthBtn.addEventListener('click',()=>{
  console.log('Prev');
  showCalendar(myYear,myMonth - 1);
})

nextMonthBtn.addEventListener('click',()=>{
 console.log('Next')
 showCalendar(myYear,myMonth + 1);
})



showCalendar(myYear,myMonth);

function showCalendar(currYear,currMonth){
  date = new Date(currYear,currMonth,1)
  myYear = date.getFullYear();
  myMonth = date.getMonth();
  date.setDate(1); // 設定當月1號
  console.log("本月",date);
  let firstDayIdx = date.getDay(); // 本月1號 星期幾？ 0~6 週日~週六
  console.log("本月1號 星期？",firstDayIdx);
  if(firstDayIdx == 0){
      firstDayIdx = 7;  // 星期天 0 ->改成 7
  }

  // 本月最後一天，是幾號
  let current_lastDay = new Date(currYear,currMonth + 1, 0).getDate();
  console.log("本月最後一天 幾號？",current_lastDay);
  let lastDayIdx = new Date(currYear,currMonth + 1, 0).getDay();// 本月最後一天 星期幾？ 0~6 週日~週六
  console.log("本月最後一天 星期？",lastDayIdx);
  if(lastDayIdx == 0){
    lastDayIdx = 7;  // 星期天 0 ->改成 7
  }

  // 上個月最後一天，是幾號。
  let prev_lastDay = new Date(currYear,currMonth, 0).getDate();
  // console.log(prev_lastDay);

  var myMonthData = ''
  // 顯示標題
  calendar_Title.innerText = `${myYear}年 / ${myMonth+1}月`
  
  // 顯示該月月曆 
  // prevMonth 前一個月
  // myMonthData += `<div class="prevMonth">28</div>`
  // myMonthData += `<div class="prevMonth">29</div>`
  // myMonthData += `<div class="prevMonth">30</div>`
  for(var x=(firstDayIdx-1);x>0;x--){
    // console.log(x);
    myMonthData += `<div class="prevMonth">${prev_lastDay-x+1}</div>`;
  }

  // currentMonth 本月
  // myMonthData += `<div>1</div>`
  // myMonthData += `<div>2</div>`
  // myMonthData += `<div>3</div>`
  // myMonthData += `<div>4</div>`

  // myMonthData += `<div>26</div>`
  // myMonthData += `<div>27</div>`
  // myMonthData += `<div>28</div>`
  // myMonthData += `<div>29</div>`
  // myMonthData += `<div>30</div>`
  // myMonthData += `<div>31</div>`
  for(var y=1;y<=current_lastDay;y++){
    // console.log(y);
    myMonthData += `<div>${y}</div>`;
  }

  // lastMonth 次月
  // myMonthData += `<div class="nextMonth">1</div>`
  var zz = 1
  for(var z = (7-lastDayIdx);z>0;z--){
    // console.log(z)
    myMonthData += `<div class="nextMonth">${zz}</div>`;
    zz++;
  }

  calendar_Body.innerHTML = myMonthData;

}