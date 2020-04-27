$(document).ready(function() {
    console.log("j loaded");
    $("#hamburgerButton").click(function() {
        $(".primaryNav").toggleClass("expand");
        $(this).toggleClass("closed");
    });
});