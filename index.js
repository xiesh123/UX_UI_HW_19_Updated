console.log("JavaScript file loaded");

$(document).ready(function() {
  var myName = "Sharon Xie";

  // Display the name on the loading page
  $("#loader .loader-content h1").text(myName);

  // Transition to the next page after 3 seconds
  setTimeout(function() {
    window.location.href = "portfolio.html";
  }, 3000);
});





