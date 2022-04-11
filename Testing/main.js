// "strict mode";

var header = document.getElementById("myDIV");
var lists = header.getElementsByClassName("list");

for (var i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

// var header = document.getElementById("myDIV");
// var lists = header.getElementsByClassName("list");

// for (var i = 0; i < lists.length; i++) {
//   lists[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }
//     this.className += " active";
//   });
// }
