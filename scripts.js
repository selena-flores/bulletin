"use strict";
$(document).ready(function () {
  $("#notification").click(function () {
    $("#message").show();
    $("#notification").hide();
    $("#ttyl").show();
    $("#invite_list").html("Duggan" + ",");

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
      "Sage",
      "Ayla",
      "Maya",
      "Maddi",
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
      "Stephen",
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
      "David Le",
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
      "Lily",
      "Michaela",
      "Seth",
      "Aya",
      "Max",
      "Cosmo",
      "KP",
      "Nic",
      "moon",
      "Nina",
      "Andrew",
      "Daven",
      "Grady",
      "Heather",
      "Dasel",
      "Fran",
      "Miles",
      "Walle",
      "Louis",
      "Data Recovery<3"
    );
    $("#invite_list").html(names[i++ % names.length] + ",");
  }
});
