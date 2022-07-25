// const txtNum1 = document.getElementById("txtNum1").value;
// const txtNum2 = document.getElementById("txtNum2").value;
// const txtNum3 = document.getElementById("txtNum3").value;

var ptb2 = new Object();
ptb2.giai = function () {
  ptb2.a = document.getElementById("txtNum1").value;
  ptb2.b = document.getElementById("txtNum2").value;
  ptb2.c = document.getElementById("txtNum3").value;
  var delta = this.b * this.b - 4 * this.a * this.c;
  if (delta < 0) {
    // console.log("PTVN");
    document.getElementById("txtNum4").value = "PTVN";
  } else if (delta == 0) {
    // alert("PT co 1 nghiem kep");
    let result = -this.b / (2 * this.a);
    document.getElementById("txtNum4").value = "x = "+result;
  } else {
    // alert("PT co 2 nghiem phan biet");
    let result1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
    let result2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
    document.getElementById("txtNum4").value =
      "x1 = " + result1 + ", x2 = " + result2;
  }
};
