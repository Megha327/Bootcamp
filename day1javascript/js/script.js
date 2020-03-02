function startTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hrs = setFormat(hours);
    unit = setUnit();
    document.getElementById("greeting").innerHTML= greeting(hours);
    document.getElementById("time").innerHTML =
    checkTime(hrs) + ":" + checkTime(minutes) + ":" + checkTime(seconds) + " " + setUnit(hours);
    var t = setTimeout(startTime, 1000);
    showDate();
}
    
function checkTime(i) {
    if (i < 10) {
    i = "0" + i;
    }
    return i;
}
    
function setFormat(j) {
    if (j - 12 > 0) {
    j = j - 12;
    } 
    else {
    j = j;
    }
    return j;
}
    
function setUnit(hr) {
    if (hr - 12 >= 0) {
    unit = "PM";
    } else {
    unit = "AM";
    }
    return unit;
}
    
function greeting(hr) {
    hr = setFormat(hr);
    if (hr < 0) {
    greet = "Good Morning";
    } else if (hr >= 0 && hr < 5) {
    greet = "Good Afternoon";
    } else if (hr >= 5 && hr <= 9) {
    greet = "Good Evening";
    } else {
    greet = "Good Night";
    }
    return greet;
}
    
var montharray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ];
function showDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    document.getElementById("date").innerHTML =
    checkTime(day) + " " + montharray[month] + " " + year;
}
