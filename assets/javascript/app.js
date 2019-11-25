$(document).ready(function() {
    $("#contact-form").submit(function(event) {
        var name = $("#ExampleInputname").val();
        var email = $("#ExampleInputemail").val();
        var message = $("exampleFormControlTextarea1").val();

        if (!name.value || !email.value || !message.value) {
            alert.error("Please fill the form");
            return false;
        } else {
            event.preventDefault();
            sendMail();
        }
    });

    function sendMail() {
        var link = "mailto:drshipradyundi@gmail.com?" + "&subject=" + name + "&body=" + message;
        window.location.href = link
    }
});