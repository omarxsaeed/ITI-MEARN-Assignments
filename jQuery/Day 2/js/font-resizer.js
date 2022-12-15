$(document).ready(function () {
    let content = $(".content");
    let errorP = $(".error");

    $("#increase").on("click", function () {
        if (content.css("fontSize") < "48px") {
            if (errorP.text) {
                errorP.text("");
            }
            content.css("font-size", "+=2");
            console.log(content.css("fontSize"));
        } else {
            errorP.text("You have reached the maximum value");
        }
    });

    $("#decrease").on("click", function () {
        if (content.css("fontSize") > "12px") {
            if (errorP.text) {
                errorP.text("");
            }
            content.css("font-size", "-=2");
            console.log(content.css("fontSize"));
        } else {
            errorP.text("You have reached the minimum value");
        }
    });
});
