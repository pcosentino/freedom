jQuery(function ($) {
    //SLIDESHOW
    var timer;
    function button1_click(event) {
        $(".slide").css("visibility", "hidden");
        $("#image1").css("visibility", "visible");
        $("#image1").css("opacity", "0");
        $("#image1").animate({
            "opacity": 1
        }, 900, "linear", null);
        $("ul.buttons li").removeClass("active");
        $("#image1").animate({
            "opacity": 1
        }, 900, "linear", null);
        $("#button1").addClass("active");
        clearTimeout(timer);
        timer = setTimeout(eval("button2_click"), "5000");
        $("#image1").animate({
            "opacity": 1
        }, 900, "linear", null);
    }

    function button2_click(event) {
        $(".slide").css("visibility", "hidden");
        $("#image2").css("visibility", "visible");
        $("#image2").css("opacity", "0");
        $("#image2").animate({
            "opacity": 1
        }, 900, "linear", null);
        $("ul.buttons li").removeClass("active");
        $("#image2").animate({
            "opacity": 1
        }, 900, "linear", null);
        $("#button2").addClass("active");
        clearTimeout(timer);
        timer = setTimeout(eval("button3_click"), "5000");
        $("#image2").animate({
            "opacity": 1
        }, 900, "linear", null);
    }

    function button3_click(event) {
        $(".slide").css("visibility", "hidden");
        $("#image3").css("visibility", "visible");
        $("#image3").css("opacity", "0");
        $("#image3").animate({
            "opacity": 1
        }, 900, "linear", null);
        $("ul.buttons li").removeClass("active");
        $("#image3").animate({
            "opacity": 1
        }, 900, "linear", null);
        $("#button3").addClass("active");
        clearTimeout(timer);
        timer = setTimeout(eval("button4_click"), "5000");
        $("#image3").animate({
            "opacity": 1
        }, 900, "linear", null);
    }

    function button4_click(event) {
        $(".slide").css("visibility", "hidden");
        $("#image4").css("visibility", "visible");
        $("#image4").css("opacity", "0");
        $("#image4").animate({
            "opacity": 1
        }, 900, "linear", null);
        $("ul.buttons li").removeClass("active");
        $("#image4").animate({
            "opacity": 1
        }, 900, "linear", null);
        $("#button4").addClass("active");
        clearTimeout(timer);
        timer = setTimeout(eval("button5_click"), "5000");
        $("#image4").animate({
            "opacity": 1
        }, 900, "linear", null);
    }

        function button5_click(event) {
        $(".slide").css("visibility", "hidden");
        $("#image5").css("visibility", "visible");
        $("#image5").css("opacity", "0");
        $("#image5").animate({
            "opacity": 1
        }, 900, "linear", null);
        $("ul.buttons li").removeClass("active");
        $("#image5").animate({
            "opacity": 1
        }, 900, "linear", null);
        $("#button5").addClass("active");
        clearTimeout(timer);
        timer = setTimeout(eval("button1_click"), "5000");
        $("#image5").animate({
            "opacity": 1
        }, 900, "linear", null);
    }

    function OnLoad(event) {
        clearTimeout(timer);
        timer = setTimeout(eval("button2_click"), "5000");
    }

    OnLoad();
    //END SLIDESHOW

    // var bob = function(){
    //     $("#contact_form").on('click', function(){
    //         alert("it worked");
    //     });
    // };
    // bob();
    //SUBMIT FORM UNBIND
    var grayOut = function () {
        $("#submit_form_button").removeClass("disable");
        $("#submit_form_button").click(function () {
            $('#submit_form_button').unbind();
            setTimeout(function () {
                grayOut();
            }, 5000);
            $("#submit_form_button").addClass("disable");
        });
    };
    grayOut();
    //END SUBMIT FORM UNBIND
});

