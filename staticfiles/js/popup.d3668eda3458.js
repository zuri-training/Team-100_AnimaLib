$(".close_icon,.close_btn").click(function() {
    $(".showpop").fadeOut("slow");
});

$(".del").click(function(e) {
    e.preventDefault();
    var csrf = $('input[name="csrfmiddlewaretoken"]').val();

    var id = $(this).attr("id");
    $(".showpop").fadeIn("slow");
    $(".popup_content").html(
        "<p id='mz'>Would you like to delete this animation?</p><center><input type='button' value='Yes' class='close' id='yes'><input type='button' value='No' class='close' id='no'></center>"
    );

    $(".close").click(function() {
        var get_answer = $(this).attr("id");
        if (get_answer == "yes") {
            $.ajax({
                type: "POST",
                url: "../delete_code/",
                data: { csrfmiddlewaretoken: csrf, id: id },
                success: function(data) {
                    $(".popup_content").html(
                        "<p id='mz'>Animation was successfully deleted</p>"
                    );
                    $(".showpop").fadeIn("slow");
                    window.location.reload(true);
                },
                error: function(data) {
                    "<p id='mz' style='color: red;'>An error occured while deleting animation</p>";
                },
            });
        }
    });
});