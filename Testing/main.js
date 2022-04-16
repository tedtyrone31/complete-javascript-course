"strict mode";

const model = [];

$(document).ready(function () {
  const language = $("#language");

  language.on("change", function () {
    const languageSelected = this.value;
    console.log(languageSelected);

    if (languageSelected == "fruit") {
      $("#language2").html(`
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
    </select>
    `);
    }
  });
});

let listItem = $("#list_item");
const phoneList = $("#phoneList");
const addList = $("#btnAddList");
const del = $("#btnDel");
const hideMe = $(".hideMe");
const body = $("#body");
const unset = $("#btnUnset");

addList.on("click", function () {
  if (listItem.val() == 0) {
    alert("Please input something");
  } else {
    phoneList.append(`<li>${listItem.val()}</li>`);
    model.push(listItem.val());
    listItem.val("");
    console.log(model);
    hideMe.show();
  }
});

del.on("click", function () {
  console.log(model);
  model.pop(listItem.val());
  $("li:last").remove();
  hideMe.hide();
});

const customDisplay = $("#customDisplay");
const btnCustomize = $("#customize");
const btnUnset = $("#btnUnset");

btnCustomize.on("click", function () {
  // $("li").slideToggle();
  // customDisplay.css("fontSize", "50px");
  // customDisplay
  //   .css("color", "red")
  //   .animate({ fontSize: "52px", letterSpacing: "100px" });
});

unset.on("click", function () {
  // customDisplay
  //   .css("font-size", "32px")
  //   .animate({ color: "black", letterSpacing: "0" });
  // customDisplay.css("color", "black").slideToggle(500);
  customDisplay.toggleClass("green");
});
