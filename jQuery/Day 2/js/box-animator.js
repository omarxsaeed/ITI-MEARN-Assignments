$(document).ready(function () {
    let box = $(".box");
    box.animate({ left: "400px", height: "200px", width: "200px" }, 1000, function () {
        box.css("background", "blue");
    });
    box.animate({ bottom: "70px", height: "100px", width: "100px" }, 1000, function () {
        box.css("background", "yellow");
    });
    box.animate({ left: "0", bottom: "0", height: "200px", width: "200px" }, 1000, function () {
        box.css("background", "green");
    });
    box.animate({ left: "0", top: "0", height: "100px", width: "100px" }, 1000, function () {
        box.css("background", "red");
    });
});
