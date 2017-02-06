function startTime() {
    console.log("time");
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('timer').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 10000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


$(function () {
    startTime();
});
