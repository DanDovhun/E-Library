$(document).ready(function() {
    $(".search-button").mouseenter(function() {
        $(this).css("background-color", "rgb(160, 210, 160)");
    });

    $(".search-button").mouseleave(function() {
        $(this).css("background-color", "rgb(180, 230, 180)");
    });

    $(".form-control").mouseenter(function() {
        $(this).css("border", "2px solid rgba(100, 120, 255, 0.8)");
    });

    $(".form-control").mouseleave(function() {
        $(this).css("border", "1px solid rgba(100, 120, 255, 0.6)");
    });

    $(".outputs").hide();
});