var mang = [];

function tao() {
  var ch = document.getElementById("name").value;
  mang.push(ch);
  document.getElementById("name").value = "";
  hien();
}

function xoa(x) {
  mang.splice(x, 1);
  hien();
}

function hien() {
  var st = "";
  st =
    '<table border="1">' +
    "<tr>" +
    "<th>tên môn</th>" +
    "<th>Xóa</th>" +
    "</tr>";
  for (let i = 0; i < mang.length; i++) {
    st +=
      "<tr>" +
      "<td>" +
      mang[i] +
      "</td>" +
      "<td> <button onclick=xoa(" +
      i +
      ")>Xóa</button></td>" +
      "</tr>";
  }
  st += "</table>";
  document.getElementById("output").innerHTML = st;
}
