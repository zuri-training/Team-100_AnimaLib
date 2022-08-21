function add_to_file(anim_name, delay, duration, iteration) {
    $(".html-code").slideUp("fast");
    var parent = document.getElementById("hiddencode");
    parent.innerHTML = "";
    var main_ani = document.createElement("p");
    var keyframes = document.createElement("p");
    if (iteration == 0) {
        main_ani.innerHTML =
            "." +
            anim_name +
            " { <br/> animation: " +
            anim_name +
            " " +
            duration +
            "s " +
            " " +
            delay +
            "s " +
            " infinite; <br/> } <br/>";
    } else {
        main_ani.innerHTML =
            "." +
            anim_name +
            " { <br/> animation: " +
            anim_name +
            " " +
            duration +
            "s " +
            " " +
            delay +
            "s " +
            iteration +
            "s; <br/> } <br/>";
    }
    if (anim_name == "fadeIn") {
        keyframes.innerHTML =
            "@keyframes " +
            anim_name +
            " { <br/> 0% {opacity: 0;} <br />" +
            "10% {opacity: 0.1;} <br /> " +
            "20% {opacity: 0.2;} <br />" +
            "30% {opacity: 0.3;} <br />" +
            "40% {opacity: 0.4;} <br />" +
            "50% {opacity: 0.5;} <br />" +
            "60% {opacity: 0.6;} <br />" +
            "70% {opacity: 0.7;} <br />" +
            "80% {opacity: 0.8;} <br />" +
            "90% {opacity: 0.9;} <br />" +
            "100% {opacity: 1;} <br />}";
    } else if (anim_name == "bounce") {
        keyframes.innerHTML =
            "@keyframes " +
            anim_name +
            "{ <br />" +
            "0%, 20%, 50%, 80%, 100% {transform: translateY(0);} <br />" +
            "40% {transform: translateY(-50px);} <br />" +
            "60% {transform: translateY(-30px);} <br />" +
            "}; <br />}";
    } else if (anim_name == "blink") {
        keyframes.innerHTML =
            "@keyframes " +
            anim_name +
            "{ <br />" +
            "0%, 100% { opacity: 1; } <br />" +
            "25%, 75% { opacity: 0; } <br />" +
            "} <br />}";
    } else if (anim_name == "moveright") {
        keyframes.innerHTML =
            "@keyframes " +
            anim_name +
            "{ <br />" +
            "0% { transform: translateX(0); } <br />" +
            "10%, 30%, 50%, 70%, 90% {transform: translateX(-50px);} <br />}";
    } else if (anim_name == "moveleft") {
        keyframes.innerHTML =
            "@keyframes " +
            anim_name +
            "{ <br />" +
            "0% { transform: translateX(0); } <br />" +
            "10%, 30%, 50%, 70%, 90% {transform: translateX(50px);} <br />}";
    } else if (anim_name == "tada") {
        keyframes.innerHTML =
            "@keyframes " +
            anim_name +
            "{ <br />" +
            "0% {transform: scale(1);} <br />" +
            "10%, 20% {transform: scale(0.8) rotate(-3deg);} <br />" +
            "30%  {transform: scale(1.3) rotate(3deg);} <br />" +
            "40% {transform: scale(1.2) rotate(3deg);} <br />" +
            "50% {transform: scale(1) rotate(-3deg)} <br />" +
            "60% {transform: scale(1.3) rotate(-3deg);} <br />" +
            "70%  {transform: scale(1.2) rotate(3deg);} <br />" +
            "60% {transform: scale(1.3) rotate(3deg);} <br />" +
            "70% {transform: scale(1.2) rotate(-3deg);} <br />" +
            "100% {transform: scale(1) rotate(0);} <br />}";
    } else if (anim_name == "swing") {
        keyframes.innerHTML =
            "@keyframes " +
            anim_name +
            "{ <br />" +
            "20% { transform: rotate(15 deg);} <br />" +
            "40% { transform: rotate(-10 deg);} <br />" +
            "60% { transform: rotate(5 deg);} <br />" +
            "80% { transform: rotate(-5 deg);} <br />" +
            "100% { transform: rotate(0 deg);} <br />}";
    } else if (anim_name == "flip") {
        keyframes.innerHTML =
            "@keyframes " +
            anim_name +
            "{ <br />" +
            "0% { transform: perspective(400px) rotateY(0); <br />" +
            "animation-timing-function: ease-out;} <br />" +
            "40% { transform: perspective(400px) translateZ(150px) rotateY(170deg); <br />" +
            "animation-timing-function: ease-out;} <br />" +
            "50% { transform: perspective(400px) translateZ(150px) rotateY(190deg); <br />" +
            "animation-timing-function: ease-out;} <br />" +
            "80% { transform: perspective(400px) rotateY(360) scale(.95); <br />" +
            "animation-timing-function: ease-out;} <br />" +
            "100% { transform: perspective(400px) scale(1); <br />" +
            "animation-timing-function: ease-out; <br />} <br />}";
    } else if (anim_name == "movedown") {
        keyframes.innerHTML =
            "@keyframes " +
            anim_name +
            "{ <br />" +
            "0%, 100% {transform: translateY(0);} <br />" +
            "10%, 30%, 50%, 70%, 90% {transform: translateY(50px);} <br /> }";
    } else {
        keyframes.innerHTML =
            "@keyframes " +
            anim_name +
            "{ <br />" +
            "0%, 100% {transform: translateY(0);} <br />" +
            "10%, 30%, 50%, 70%, 90% {transform: translateY(-50px);} <br />}";
    }
    parent.appendChild(main_ani);
    parent.appendChild(keyframes);
    $(".html-code").fadeIn("slow");
}

$(document).ready(function() {
    // check if the input field is checked
    var infinite_value = $("#infinite").prop("checked");
    if (infinite_value == true) {
        $("#iterationcountfield").prop("disabled", true);
    }
});

$(".but").click(function() {
    // get the name of the animation.
    var animation_name = $(this).html();
    animation_name = animation_name.replace(/\s/g, "").toLowerCase();
    // set the color of the element
    if (animation_name === "fade") {
        animation_name = "fadeIn";
    }
    // get the color
    var color_code = $(this).css("color");

    if (color_code == "rgb(255, 255, 255)") {
        $(this).css("background-color", "#EDEDF2");
        $(this).css("color", "#555555");
        $("#animatedobject").removeClass(animation_name);
        $("#action_name").val("");
    } else {
        // convert to small letter and strip off spaces

        $(this).css("background-color", "#1F2782");
        // alert($(this).css("background-color"));
        // set the color of the writings
        $(this).css("color", "white");
        // set the background of other elements to something else.
        $(".but").not(this).css("background-color", "#EDEDF2");
        $(".but").not(this).css("color", "#555555");

        $("#animatedobject").removeClass();
        $("#animatedobject").addClass("result");
        $("#animatedobject").addClass(animation_name);
        $("#action_name").val(animation_name);
    }
    // fade it in
});

$("#objectfield").change(function() {
    var value = alert($(this).val());
    if (value == "circle") {
        $(".result").css("border-radius", "50%");
    } else {
        $(".result").css("border-radius", "0");
    }
});

$("#infinite").click(function() {
    if ($(this).prop("checked")) {
        $("#iterationcountfield").prop("disabled", true);
    } else {
        $("#iterationcountfield").prop("disabled", false);
    }
});

$(".generatebutton").click(function() {
    // get the name of the animation.
    var anim = $("#action_name").val();
    if (anim.trim() == "") {
        $(".showpop").fadeIn("slow");
    } else {
        var name = $("#namefield").val();
        var box = $("#objectfield").val();
        var duration = $("#durationfield").val();
        var delay = $("#delayfield").val();

        if (name.trim() == "") {
            $("#namefield").focus();
        } else if (box.trim() == "") {
            $("#objectfield").focus();
        } else {
            if ($("#infinite").prop("checked")) {
                var iteration = 0;
            } else {
                var iteration = $("#iterationcountfield").val();
            }
            add_to_file(anim, delay, duration, iteration);
        }
    }
});

$("#savelogo").click(function() {
    var csrf = $('input[name="csrfmiddlewaretoken"]').val();
    var message = $("#hiddencode").html();
    var anim = $("#action_name").val();
    if (anim.trim() == "") {
        $(".showpop").fadeIn("slow");
    } else {
        $.ajax({
            type: "POST",
            url: "save_code/",
            data: { csrfmiddlewaretoken: csrf, message: message, anim: anim },
            success: function(data) {
                $("#mz").text(data.success_message);
                $(".showpop").fadeIn("slow");
            },
            error: function(data) {
                alert("error");
            },
        });
    }
});
$("#download").click(function() {
    var csrf = $('input[name="csrfmiddlewaretoken"]').val();
    var message = $("#hiddencode").text();
    var anim = $("#action_name").val();
    if (anim.trim() == "") {
        $(".showpop").fadeIn("slow");
    } else {
        $.ajax({
            type: "POST",
            url: "download_code/",
            data: { csrfmiddlewaretoken: csrf, message: message, anim: anim },
            success: function(data) {
                $("#mz").text("your code has been downloaded");
                $(".showpop").fadeIn("slow");
                window.location.href = "/download_file/";
            },
            error: function(data) {
                alert("error");
            },
        });
    }
});