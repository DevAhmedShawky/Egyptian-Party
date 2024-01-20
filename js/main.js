$(document).ready(function () {
  //////////////Start Loading/////////////////
  $(".loading").fadeOut(3000, function () {
    $("body").css("overflow", "auto");
  });
  //////////////End Loading/////////////////

  //////////////Start SliderDown For Secition Page/////////////////
  $(".nav-link").on("click", function (e) {
    let secitionSelector = $(e.target).attr("href");
    let secitionOffset = $(secitionSelector).offset().top;
    $("html , body").animate({ scrollTop: `${secitionOffset}px` }, 2000);
  });

  //////////////End SliderDown For Secition Page/////////////////

  //////////////Start Toggle On Home Links/////////////////
  let links = $(".home-links");
  $(".close-tap").on("click", () => {
    links.animate({ width: "0px" }, 1000);
    $(".home-icon").animate({ left: "0" }, 1000);
  });

  $(".home-icon").on("click", () => {
    links.animate({ width: "280px" }, 1000);
    $(".home-icon").animate({ display: "none" }, 1000);
  });
  //////////////End Toggle On Home Links/////////////////

  //////////////Start Duration/////////////////
  $(".toggle").on("click", function () {
    $(".inner").not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
  });

  /////////Count/////////////
  let diffrent = "";
  function updateTimer() {
    futureDate = Date.parse("June 11, 2023 11:30:00");
    dateNow = new Date();
    diffrent = futureDate - dateNow;

    days = Math.floor(diffrent / (1000 * 60 * 60 * 24));
    hours = Math.floor(diffrent / (1000 * 60 * 60));
    mins = Math.floor(diffrent / (1000 * 60));
    secs = Math.floor(diffrent / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    $(".seconds").text(`${s} S`);
    $(".minutes").text(`${m} M`);
    $(".hours").text(`${h} H`);
    $(".days").text(`${d} D`);
  }
  let x = setInterval(updateTimer, 1000);
  //////////////End Duration/////////////////

  //////////////Start Count Of KeyWords/////////////////

  let Numperkey = 100;
  $(".message").keyup(function () {
    let valueOfKeyword = $(this).val().length;
    let result = Numperkey - valueOfKeyword;
    if (result <= 0) {
      $(".keyword").text("your available character finished");
    } else {
      $(".keyword").text(result);
    }
  });

  $(".submit").on("click", function (e) {
    e.preventDefault();
  });
  //////////////End Count Of KeyWords/////////////////
});
