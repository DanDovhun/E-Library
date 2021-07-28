"use strict";

$(document).ready(function () {
  $(".back").click(function () {
    window.location.replace("/add");
  });
  $(".form-control").mouseenter(function () {
    $(this).css("border", "2px solid rgba(100, 120, 255, 0.8)");
  });
  $(".form-control").mouseleave(function () {
    $(this).css("border", "1px solid rgba(100, 120, 255, 0.6)");
  });
  $(".genres").click(function () {
    $(".all_genres").slideDown(500, function () {});
  });
  $(".hide").click(function () {
    $(".all_genres").slideUp(750, function () {});
  });
  $(".educational").click(function () {
    document.getElementById("input").value = "Náučná";
  });
  $(".adventure").click(function () {
    document.getElementById("input").value = "Dobrodružná";
  });
  $(".detective").click(function () {
    document.getElementById("input").value = "Detektívka";
  });
  $(".religious").click(function () {
    document.getElementById("input").value = "Náboženská";
  });
  $(".travel").click(function () {
    document.getElementById("input").value = "Cestovateľská";
  });
  $(".music").click(function () {
    document.getElementById("input").value = "Hudba";
  });
  $(".fantasy").click(function () {
    document.getElementById("input").value = "Fantasy";
  });
  $(".scifi").click(function () {
    document.getElementById("input").value = "Sci-fi";
  });
  $(".kids_stories").click(function () {
    document.getElementById("input").value = "Detské rozprávky";
  });
  $(".drama").click(function () {
    document.getElementById("input").value = "Dráma";
  });
  $(".dystopia").click(function () {
    document.getElementById("input").value = "Dystopia";
  });
  $(".biography").click(function () {
    document.getElementById("input").value = "Biografia";
  });
  $(".law").click(function () {
    document.getElementById("input").value = "Zákon";
  });
  $(".kids_poems").click(function () {
    document.getElementById("input").value = "Detské básničky";
  });
  $(".short_stories").click(function () {
    document.getElementById("input").value = "Poviedky";
  });
  $(".dictionary").click(function () {
    document.getElementById("input").value = "Slovník";
  });
  $(".health").click(function () {
    document.getElementById("input").value = "Zdravie";
  });
  $(".philosophy").click(function () {
    document.getElementById("input").value = "Filozofia";
  });
  $(".instructions").click(function () {
    document.getElementById("input").value = "Návod";
  });
  $(".diary").click(function () {
    document.getElementById("input").value = "Denník";
  });
  $(".photography").click(function () {
    document.getElementById("input").value = "Fotografia";
  });
  $(".personal_growth").click(function () {
    document.getElementById("input").value = "Osobný rast";
  });
  $(".business").click(function () {
    document.getElementById("input").value = "Business";
  });
  $(".politics").click(function () {
    document.getElementById("input").value = "Politics";
  });
  $(".life_story").click(function () {
    document.getElementById("input").value = "Životopis";
  });
  $(".golf").click(function () {
    document.getElementById("input").value = "Golf";
  });
  $(".economics").click(function () {
    document.getElementById("input").value = "Ekonomika";
  });
  $(".hospitality").click(function () {
    document.getElementById("input").value = "Pohostinnosť";
  });
  $(".close").click(function () {
    $(".alert").fadeOut(200);
  });
  $(".all_genres").hide();
});
//# sourceMappingURL=animate.dev.js.map
