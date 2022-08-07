$("[type=file]").on("change", function() {
    // Name of file and placeholder
    var file = this.files[0].name;
    var dflt = $(this).attr("placeholder");
    if ($(this).val() != "") {
        $(this).next().text(file);
    } else {
        $(this).next().text(dflt);
    }
});

$("#email_update").click(function(e) {
    e.preventDefault();
    $("#email_container_no_edit").fadeOut("fast");
    $("#email_container_edit").fadeIn("fast");
});

$("#password_update").click(function(e) {
    e.preventDefault();
    $("#password_container_no_edit").fadeOut("fast");
    $("#password_container_edit").fadeIn("fast");
});

$("#email_container_edit").on("click", ".cancel_button", function(e) {
    e.preventDefault();
    $("#email").prop("readonly", false);
    $("#email").focus();
});

$("#email_container_edit").on("click", ".update_button", function(e) {
    e.preventDefault();
    $("#email").prop("readonly", true);
});

$("#password_container_edit").on("click", ".cancel_button", function(e) {
    e.preventDefault();
    $("#password").prop("readonly", false);
    $("#password").focus();
});

$("#password_container_edit").on("click", ".update_button", function(e) {
    e.preventDefault();
    $("#password").prop("readonly", true);
});