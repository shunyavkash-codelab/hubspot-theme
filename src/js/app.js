require("jquery");

// tab-filter
$(document).ready(function () {
  $(".filter-tab-btn").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".all").fadeIn("700");
    } else {
      $(".all")
        .not("." + value)
        .fadeOut("2000");
      $(".all")
        .filter("." + value)
        .fadeIn("2000");
    }
    var filterOpen = $(this).hasClass("active");
    if (filterOpen) {
      $(".filter-tab-btn").removeClass("active");
      $(this).addClass("active");
    } else {
      var siblings = $(".filter-tab-nav").find(".active");
      siblings.removeClass("active");
      $(this).addClass("active");
    }
  });
});

// $(document).ready(function () {
//   if (!$(".filter-tab-btn").hasClass("active")) {
//   }
//   $(".filter-tab-btn").click(function () {
//     var value = $(this).attr("data-filter");
//     if (value == "all") {
//       /* $(".all").show("700"); */
//       $(".all").fadeIn();
//     } else {
//       /* $(".all")
//         .not("." + value)
//         .hide("2000");
//       $(".all")
//         .filter("." + value)
//         .show("2000"); */

//       if ($(".all").css("display", "none")) {
//         $(".all." + value).fadeIn();
//       }
//     }

//     var siblings = $(".filter-tab-nav").find(".active");
//     siblings.removeClass("active");
//     $(this).addClass("active");
//   });
// });
