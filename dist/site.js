$(document).ready(function() {
  $("#js-modal").on("click", function(e) {
    e.preventDefault();
    $("#overlay, #js-about").addClass("active");

    $("#js-close, #overlay").on("click", function() {
        $("#overlay, #js-about").removeClass("active");
        return false;
    });
  });
});
