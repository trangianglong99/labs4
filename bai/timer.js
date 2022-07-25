var now = new Date();
var h = now.getHours();
var m = now.getMinutes();
var s = now.getSeconds();
var timeNow = h + ":" + m + ":" + s;
document.getElementById("txtNum").value = "Thời gian : " + timeNow;
setTimeout(location.reload(), 1000);
