var sv = new Object();
sv.hienThi = function () {
  sv.hoTen = document.getElementById("txtText1").value;
  sv.diemTB = +document.getElementById("txtText2").value;
  //   let HocLuc = this.HocLuc;
  if (this.diemTB >= 5) {
    this.HocLuc = "Đậu";
    document.getElementById("txtText3").value = this.HocLuc;
  } else {
    this.HocLuc = "Rớt";
    document.getElementById("txtText3").value = this.HocLuc;
  }
};
