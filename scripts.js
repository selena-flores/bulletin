"use strict";
$(document).ready(function () {
  $("#notification").click(function () {
    $("#message").show();
    $("#notification").hide();
    $("#ttyl").show();
    clearInterval(blinker);
    setInterval(invite_list, 500);
  });
  const blinker = setInterval(blink, 500);
  function blink() {
    if ($("#notification").css("border-color") === "rgb(255, 255, 0)") {
      $("#notification").css("border-color", "blue");
    } else {
      $("#notification").css("border-color", "yellow");
    }
  }

  function invite_list() {
    var names = [
      "Ayla",
      "Maya",
      "Madi",
      "Ryan",
      "Vic",
      "Avo",
      "Kaitlyn",
      "Matt",
      "Daniel",
      "Taylor",
      "Brandon",
      "Claire",
      "Gabe",
      "Theresa",
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
      "Dougan",
    ];
    let i = 0;
    setInterval(function () {
      // console.log(names[i % names.length]);
      // $("#invite_list").html("dear " + names[i % names.length]);
      console.log(i);
      i++;
      
    }, 500);
  }
});
