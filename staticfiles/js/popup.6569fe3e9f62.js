$(".close_icon,.close_btn").click(function() {
    $(".showpop").fadeOut("slow");
});

$(".del").click(function(e) {
    e.preventDefault();
    var id = $(this).attr("id");
    alert(id);
    $(".showpop").fadeIn("slow");
    $(".popup_content").html(
        "<p id='mz'>Would you like to delete this animation?</p><center><input type='button' value='Yes' class='close' id='yes'><input type='button' value='No' class='close_btn' id='no'></center>"
    );
});

$(".close").click(function() {
    var get_answer = $(this).attr("id");
    alert(get_answer);
    $(".showpop").fadeOut("slow");
});