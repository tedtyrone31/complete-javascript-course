"strict mode";

$(document).ready(function () {
  const test = $("#test");
  const test2 = $("#test2");
  const list = $(".list");
  const ul = $("ul");
  const list3 = $(".list3");

  console.log(ul);
  $(".button").click(function () {
    $("body").toggleClass("black");
    $("#dark").toggleClass("hidden");
    $("#light").toggleClass("hidden");
    $("h1").toggleClass("white");
  });

  $(".list3").click(function () {
    $(".color").toggleClass("hidden");
  });
  $(".btn").click(function () {
    $(".btn").toggleClass("hidden");
    $(".btn").toggleClass("hideNav");
    $(".myNav").toggleClass("open");
  });
});
