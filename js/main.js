$(document).ready(function () {
    console.log("Hello!");
    console.log("This is a WIP! Check here: https://github.com/jp-nguyen/personal-website")


    // cycle between pictures

    var next = 1;
    const numImgs = 4;

    $(".top").click(function() {
        $(".top").toggleClass("transparent");
        $(".top").one("transitionend", function() {
                next = (next + 1) % numImgs;
                $(next % 2 == 0 ? ".top" : ".bottom").attr("src", "assets/imgs/me" + next + ".jpg");
            }
        );
    });
});