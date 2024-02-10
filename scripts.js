"use strict";
$(document).ready(function () {
  $("#notification").click(function () {
    $("#message").show();
    $("#notification").hide();
    $("#ttyl").show();
    $("#invite_list").html("Dougan" + ",");

    clearInterval(blinker);
    setInterval(invite_list, 1000);
  });
  const blinker = setInterval(blink, 500);
  function blink() {
    if ($("#notification").css("border-color") === "rgb(255, 255, 0)") {
      $("#notification").css("border-color", "blue");
    } else {
      $("#notification").css("border-color", "yellow");
    }
  }
  let i = 0;
  function invite_list() {
    var names = new Array(
      "Ayla",
      "Maya",
      "Madi",
      "Ryan",
      "Vic",
      "Avo",
      "Matt",
      "Daniel",
      "Taylor",
      "Brandon",
      "Claire",
      "Gabe",
      "Theresa",
      "Kaitlyn",
      "Steven Wattson",
      "Ash",
      "Ben",
      "Peggy",
      "Anika",
      "Wolf",
      "Bebe",
      "V",
      "River",
      "Jesse",
      "Sepha",
      "David Lee",
      "Andre",
      "Jaron",
      "E",
      "Steph",
      "Paula",
      "Samara",
      "Noir",
      "Jesus",
      "Rosa",
      "Duggan",
    );
    $("#invite_list").html(names[i++ % names.length] + ",");
  }
});
