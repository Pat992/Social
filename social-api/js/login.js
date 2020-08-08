$(document).ready(function () {

    let error = 0;

    // Change between register and login
    $("#register-btn").on('click', function () {
        let text = $("#login-title").text();        // Text of form
        let btnText = $(this).text();               // Text of button
        let isLogin = $("#isLogin").attr('name');   // get name of isLogin

        // Toggle the Form between register and login
        $(".register").slideToggle();
        // If titla and button is register, change to login and vise vera
        $("#login-title").text(text == "Login" ? "Register" : "Login");
        $(this).text(btnText == "Register" ? "Login" : "Register");
        $("#submit-btn").toggleClass("register-btn");
        $("#isLogin").attr('name', isLogin == "login" ? "register" : "login");

        $(".error-text").each(function(){ 
            $(this).addClass("hide");
        });
    });

    // Prevent from submitting if certain requirements are not fullfilled
    $("#submit-btn").on('click', function (e) {
        $(".error-text").each(function(){
            if($(this).hasClass("hide")) {
                error = 0;
            }
            else {
                error = 1;
                return false;
            }
        });
        if ($(this).hasClass("register-btn")) {
            if (error > 0) {
                e.preventDefault();
            }
        }
    });

    // Is a new user trying to register
    // Check username
    $("#name-input").on("focusout", function () {
        if ($("#isLogin").attr('name') == "register") {
            let username = $("#name-input").val();
            username = username.replace(/ +?/g, '');
            // Is name existing?
            let exists = usernameExisting();

            // is name empty?
            if (username == "") {
                // Show error, and set isError to error
                $("#err-name-empty").removeClass("hide");
            }
            else {
                // Remove the error-message and set isError to ''
                $("#err-name-empty").addClass("hide");
            }
        }
    });

    // Check for empty email
    $("#email").on("focusout", function () {
        if ($("#isLogin").attr('name') == "register") {
            let email = $("#email").val();
            email = email.replace(/ +?/g, '');

            // is email empty?
            if (email == "") {
                // Show error, and set isError to error
                $("#err-email-empty").removeClass("hide");
            }
            else {
                // Remove the error-message and set isError to ''
                $("#err-email-empty").addClass("hide");
            }
        }
    });

    // Check for two different email-adresses
    $("#repeat-email").on("focusout", function () {
        if ($("#isLogin").attr('name') == "register") {
            let email = $("#email").val();
            let emailRepeat = $("#repeat-email").val();
            email = email.replace(/ +?/g, '');

            // is email not identical?
            if (email != emailRepeat) {
                // Show error, and set isError to error
                $("#err-repeat-email").removeClass("hide");
            }
            else {
                // Remove the error-message and set isError to ''
                $("#err-repeat-email").addClass("hide");
            }
        }
    });

    // Check for empty password
    $("#password").on("focusout", function () {
        if ($("#isLogin").attr('name') == "register") {
            let password = $("#password").val();
            password = password.replace(/ +?/g, '');

            // is email empty?
            if (password == "") {
                // Show error, and set isError to error
                $("#err-password-empty").removeClass("hide");
            }
            else {
                // Remove the error-message and set isError to ''
                $("#err-password-empty").addClass("hide");
            }
        }
    });

    // Check for two different passwords
    $("#repeat-password").on("focusout", function () {
        if ($("#isLogin").attr('name') == "register") {
            let password = $("#password").val();
            let passwordRepeat = $("#repeat-password").val();
            password = password.replace(/ +?/g, '');

            // is password not identical?
            if (password != passwordRepeat) {
                // Show error, and set isError to error
                $("#err-repeat-password").removeClass("hide");
            }
            else {
                // Remove the error-message and set isError to ''
                $("#err-repeat-password").addClass("hide");
            }
        }
    });

    // Check via Ajax, if username exists already
    function usernameExisting() {
        // Save the username
        let name = $("#name-input").val();
        // send an Ajax-request, to find out if user is existing
        $.ajax({
            url: 'ajax/userExisting.php',
            async: false,
            data: "name=" + name,
            type: 'post',
            dataType: 'text',
            cache: false,
            processData: false,
            success: function (result) {
                // If user already exists:
                if (result == 1) {
                    // Show error, and set isError to error
                    if ($("#isLogin").attr('name') == "register") {
                        $("#err-name").removeClass("hide");
                    }
                    else {
                        $("#err-not-existing").addClass("hide");
                    }
                }
                // if not:
                else {
                    // Remove the error-message and set isError to ''
                    if ($("#isLogin").attr('name') == "register") {
                        $("#err-name").addClass("hide");
                    }
                    else {
                        $("#err-not-existing").removeClass("hide");
                    }
                }
            }
        });
    }

    function passwordCorrect() {
        let userpassword = $("#password").val();
        let username = $("#name-input").val();

        $.ajax({
            context: this,
            async: false,
            url: 'ajax/passwordCheckAjax.php',
            data: "name=" + username + "&password=" + userpassword,
            type: 'post',
            dataType: 'text',
            cache: false,
            processData: false,
            success: function (result) {
                //console.log(result);
                // If user already exists:
                if (result == 1) {
                    // Show error, and set isError to error
                    $("#err-password-wrong").removeClass("hide");
                }
                // if not:
                else {
                    // Remove the error-message and set isError to ''
                    $("#err-password-wrong").addClass("hide");
                }
            }
        });
    }

    /***************************
     * Check Password and user for Login
     **************************/
    $("#submit-btn").on('click', function (e) {
        if (!$(this).hasClass("register-btn")) {
            error = 0;

            // Check if username existing
            usernameExisting();
            // Check if password correct
            passwordCorrect();

            $(".error-text").each(function(){
                if($(this).hasClass("hide")) {
                    error = 0;
                }
                else {
                    error = 1;
                    return false;
                }
            });

            if(error > 0) {
                e.preventDefault();
            }
        }
    });
});