$(document).ready(function() {
  $("button.dark").click(function() {
    $("body").removeClass();
    $("body").addClass("goDark");
    $(".dark").toggle();
    $(".light").toggle();
  });
  $("button.light").click(function() {
    $("body").removeClass();
    $("body").addClass("goLight");
    $(".light").hide();
    $(".dark").show();
  });
});
