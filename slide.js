var picadd = ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg"];

//funtion find index of current picture

function findInd(x) {

  var current = document.getElementsByClassName("cur")[0].src;
  var curstr = current.split("/");
  current = "img/" + curstr[curstr.length - 1];
  ind = picadd.findIndex(picadd => picadd == current);
  if (x == 1) {
    if (ind != picadd.length - 1) {
      fade(ind + 1);
    } else {
      fade(0);
    }
  } else {
    if (ind != 0) {
      fade(ind - 1);
    } else {
      fade(picadd.length - 1);
    }
  }

}

//function fade

function fade(n) {
  document.getElementById("ss").classList.add("chkslide");
  setTimeout(function() {
    pics(n);
  }, 500);

  setTimeout(function() {
    document.getElementById("ss").classList.remove("chkslide");
  }, 1000);
}
//function change picture
function pics(n) {
  var pict = document.getElementsByClassName("picture");
  var dot = document.getElementsByClassName("dot");

  for (i = 0; i < dot.length; i++) {
    if (i == n) {
      dot[i].classList.add("active");
    } else {
      dot[i].classList.remove("active");
    }
  }
  if (picadd.length >= 3) {
    if (n != picadd.length - 1 && n != 0) {

      pict[0].src = picadd[n - 1];
      pict[1].src = picadd[n];
      pict[2].src = picadd[n + 1];
    } else if (n == picadd.length - 1) {
      //last pic
      pict[0].src = picadd[n - 1];
      pict[1].src = picadd[n];
      pict[2].src = picadd[0];
    } else {
      //first pic
      pict[0].src = picadd[picadd.length - 1];
      pict[1].src = picadd[n];
      pict[2].src = picadd[n + 1];
    }
  } else {
    if (picadd.length == 1) {
      pict[0].src = "img/nopic.jpg";
      pict[1].src = picadd[0];
      pict[2].src = "img/nopic.jpg";
    }
    if (picadd.length == 2) {
      if (n == pict.length - 1) {
        pict[0].src = picadd[0];
        pict[1].src = picadd[1];
        pict[2].src = picadd[0];
      } else {
        pict[0].src = picadd[1];
        pict[1].src = picadd[0];
        pict[2].src = picadd[1];
      }
    }
  }
}
//initial
pics(0);
