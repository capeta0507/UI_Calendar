# Calendar UI
###### tags: `UI` `Calendar `

搜尋關鍵字：web calendar UI design。
本練習目標是日曆設計，UI在日曆的設計五花八門，大致上區分如下。
 
### 日曆
日曆顯示當月的完整天數，以及填補上月、下月的空缺

![](https://i.imgur.com/Ze7O0Dz.png)

![](https://i.imgur.com/mbnEJ5b.png)


#### 日曆 Division 區分
![](https://i.imgur.com/u5I2YGJ.png)

### 教學參考
* [Design a Calendar for your Blog and Website using HTML5 CSS3 and JavaScript](https://www.youtube.com/watch?v=DFu_636ndec)
(傳統的 table 表格製作)
* [Calendar UI Design With CSS Grid | Pure Html CSS UI Design](https://www.youtube.com/watch?v=YL3ufzQ0QC4&t=6s)
(以 CSS display:grid , grid-template-columns:repeat , grid-gap:10px 來設計)
* [Calendar with HTML, CSS, and JavaScript](https://www.youtube.com/watch?v=o1yMqPyYeAo)
(以 CSS display:flex , width:calc(....))

### 範本
以 Table 的簡易設計
![](https://i.imgur.com/WMurcY1.png)

HTML
```htmlmixed=
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Calendar</title>
  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet"><link rel="stylesheet" href="./style.css">
</head>
<body>
<!-- partial:index.partial.html -->
<div class="container">
  <div class="calendar-container">
    <header>
      <div class="day">18</div>
      <div class="month">August</div>
    </header>

    <table class="calendar">
      <thead>
        <tr>
          <td>Mon</td>
          <td>Tue</td>
          <td>Wed</td>
          <td>Thu</td>
          <td>Fri</td>
          <td>Sat</td>
          <td>Sun</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="prev-month">29</td>
          <td class="prev-month">30</td>
          <td class="prev-month">31</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
        </tr>
        <tr>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td class="current-day">18</td>
        </tr>
        <tr>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
        </tr>
        <tr>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>31</td>
          <td class="next-month">1</td>
        </tr>
      </tbody>
    </table>

    <div class="ring-left"></div>
    <div class="ring-right"></div>

  </div> <!-- end calendar-container -->
</div> <!-- end container -->
<!-- partial -->
</body>
</html>

```

CSS
```css=
body {
  background: #ccc;
  font: 87.5%/1.5em 'Lato', sans-serif;
  margin: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td {
  padding: 0;
}

.container {
  left: 50%;
  position: fixed;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.calendar-container {
  position: relative;
  width: 450px;
}

.calendar-container header {
  border-radius: 1em 1em 0 0;
  background: #e66b6b;
  color: #fff;
  padding: 3em 2em;
}

.day {
  font-size: 8em;
  font-weight: 900;
  line-height: 1em;
}

.month {
  font-size: 4em;
  line-height: 1em;
  text-transform: lowercase;
}

.calendar {
  background: #fff;
  border-radius: 0 0 1em 1em;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2), 0 3px 1px #fff;
  color: #555;
  display: inline-block;
  padding: 2em;
}

.calendar thead {
  color: #e66b6b;
  font-weight: 700;
  text-transform: uppercase;
}

.calendar td {
  padding: .5em 1em;
  text-align: center;
}

.calendar tbody td:hover {
  background: #cacaca;
  color: #fff;
}

.current-day {
  color: #e66b6b;
}

.prev-month,
.next-month {
  color: #cacaca;
}

.ring-left,
.ring-right {
  position: absolute;
  top: 230px;
}

.ring-left {
  left: 2em;
}

.ring-right {
  right: 2em;
}

.ring-left:before,
.ring-left:after,
.ring-right:before,
.ring-right:after {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.3), 0 -1px 1px rgba(0, 0, 0, 0.2);
  content: "";
  display: inline-block;
  margin: 8px;
  height: 32px;
  width: 8px;
}
```