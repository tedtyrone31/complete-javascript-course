"strict mode";

$(document).ready(function () {
  const lessonTitle = $("#lesson");
  const lessonInfo = $("#lessonInfo");
  const add = $("#add");
  // const del = $(".delete");
  const deleteAll = $("#deleteAll");
  const title_list = $(".title_list");
  const main_title = $(".main_title");

  const arrLessons = [];
  const arrLessonsInfo = [];

  // ================================================================
  // FUNCTIONS
  // ================================================================
  // ================================================================
  // ADD
  // ================================================================

  add.on("click", function () {
    if (lessonTitle.val() == 0 || lessonInfo.val() == 0) {
      alert("Please fill out all fields.");
    } else {
      arrLessons.push(lessonTitle.val());
      arrLessonsInfo.push(lessonInfo.val());
      title_list.css("textTransform", "capitalize");
      // title_list.append(`<li>${arrLessons[0]}</li>`);
      title_list.append(
        `<li >${lessonTitle.val()}<p class="mab10">${lessonInfo.val()}<button class="delete">Delete</button></p></li>`
      );
      console.log(lessonInfo.value);
      // title_list.append(`<br>`);
      lessonTitle.val("");
      lessonInfo.val("");
      console.log(arrLessons);
      // title_list.children().css({ color: "red" });
      title_list.find("p:first").css({ color: "red" });
      $(".title_list>li").eq(2).css({ color: "green" });
      $(".title_list>li").filter(".unq").css({ color: "yellow" });
      deleteAll.addClass("showButton");

      // $(".title_list>li").not(".unqNOT").css({ color: "white" });

      // ================================================================
      // DELETE
      // ================================================================

      $(document).ready(function () {
        const del = $(".delete");

        del.on("click", function () {
          // console.log($(this));
          // $(this).parent();
          $(this).parent().parent().remove();
          title_list.children("p").remove();
          arrLessons.pop();
          console.log(arrLessons);
        });
      });
    }
    deleteAll.on("click", function () {
      // console.log($(this));
      // $(this).parent();
      $(".delete").parentsUntil(title_list).remove();
      arrLessons.pop();
      console.log(arrLessons);
      deleteAll.removeClass("showButton"); //remove button
    });
  });

  // arrLessons[0].on("click", function () {
  //   main_title.text(arrLessons[0]);
  // });
});
