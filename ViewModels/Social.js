/* global Share */
/* global swal */

var url = "http://node-server-v1.herokuapp.com";

function AddSocialData() {
    //Add Social Box... Social Linnks...
    $("#Social-Page").append("<div class=\"Social-Box\"></div>");
    $(".Social-Box").append("<a class=\"Facebook tooltipstered\" href=\"https://www.facebook.com/cartOOnPT\" target=\"_blank\" title=\"Facebook\"></a> ");
    $(".Social-Box").append("<a class=\"Instagram tooltipstered\" href=\"http://instagram.com/josemiguelmalaca\" target=\"_blank\" title=\"Instagram\"></a> ");
    $(".Social-Box").append("<a class=\"GitHub tooltipstered\" href=\"https://github.com/tOOnPT\" target=\"_blank\" title=\"GitHub\"></a> ");
    $(".Social-Box").append("<a class=\"GooglePlus tooltipstered\" href=\"https://plus.google.com/u/0/108123132092292147984/posts\" target=\"_blank\" title=\"Google+\"></a> ");
    $(".Social-Box").append("<a class=\"LinkedIn tooltipstered\" href=\"http://lnkd.in/D3YEs4\" target=\"_blank\" title=\"LinkedIn\"></a> ");
    $(".Social-Box").append("<a class=\"YouTube tooltipstered\" href=\"http://www.youtube.com/user/tOOnPT\" target=\"_blank\" title=\"Youtube\"></a> ");
    $(".Social-Box").append("<a class=\"CoderBits tooltipstered\" href=\"https://coderbits.com/cartoon\" target=\"_blank\" title=\"CoderBits\"></a> ");
    $(".Social-Box").append("<a class=\"Blogger tooltipstered\" href=\"http://tecknologicus.blogspot.pt/\" target=\"_blank\" title=\"Tecknologicus Blog\"></a> ");
    $(".Social-Box").append("<a class=\"Twitter tooltipstered\" href=\"https://twitter.com/tOOnPT\" target=\"_blank\" title=\"Twitter\"></a> ");
    $(".Social-Box").append("<a class=\"Codeacademy tooltipstered\" href=\"http://www.codecademy.com/pt/jose.miguel.malaca\" target=\"_blank\" title=\"Codeacademy\"></a>");
    //ShareMe Box...
    $(".Social-Box").append("<div class=\"share\"><div class=\"share-button\"></div></div>");
    
    //Twitter Widget
    //$("#Social-Page").append("<a id=\"Twitter-Box\" class=\"twitter-timeline\" href=\"https://twitter.com/tOOnPT\" data-widget-id=\"489022777085526016\">Tweets de @tOOnPT</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>");

    if (DEBUG)
    {
        url = URL + Port;   
    }
    //Mail Box...
    $("#Social-Page").append("<div class=\"Mail-Box\"></div>");
    $(".Mail-Box").append("<img class=\"Mail\" src=\"images/Social/mail.png\" />");
    $(".Mail-Box").append("<p id=\"TitleMail\" class=\"BlockSelection\"> Drop me a line </p>");
    $(".Mail-Box").append("<form class=\"MailMe\" id =\"MailForm\" enctype=\"text/plain\" method=\"get\" action=\"" + url + "/sendMail\">"
        + "<input id=\"inputName\" type=\"text\" name=\"name\" placeholder=\"name\" required=\"required\" size=\"15\">"
        + "<input id=\"inputMail\" type=\"email\" name=\"mail\" placeholder=\"email\" required=\"required\" size=\"25\">"
        + "<br><br><input id=\"inputText\" type=\"text\" name=\"comment\" placeholder=\"comment\" required=\"required\" size=\"50\">"
        + "<br><br><input id=\"SubmitButton\" type=\"submit\" class=\"btn btn-sm btn-primary\" value=\"Send\">"
        + "<br><br><div id=\"reCaptcha\" class=\"g-recaptcha\" data-callback=\"reCaptchaCallback\" data-theme=\"dark\" data-size=\"normal\" data-sitekey=\"6LcNwgsTAAAAAH8rjNxNN_ZKEDtEbaUSvU_lj4oj\"></div>"
        + "</form>");
}

function SendMailDataToServer(url, name, mail, text, byConsole){
    // Send the data using post
    var sendResult = false;
    $.post( url, { name: name, mail: mail, text: text } )
    .done(function() {
        if (byConsole == false)
        {
            //show some positive feedback to the user...
            swal("Mail sended.", "Our comment was sent, thank you. :)", "success");
        }
        sendResult = true;
    })
    .fail(function() {
        if (byConsole == false)
        {
            //show some negative feedback to the user...
            swal("Mail not sended.", "Some error occour, try again some other time :(", "error");
        }
    })
    .always(function() {
        if (byConsole == false)
        {
            //clean form inputs data...
            document.getElementById("inputName").value = "";
            document.getElementById("inputMail").value = "";
            document.getElementById("inputText").value = "";
            
            $("#reCaptcha").reset("reCaptcha")
        }
    });
    return sendResult;
}

var SendMail = false;
var reCaptchaCallback = function(response) {
    if (response.length > 0) {
        SendMail = true;
    }
};

//document ready event ----------
$(document).ready(function() {

    AddSocialData();

    //what happens in the Mail-Box...
    $("#MailForm").submit(function (event) {
        // Stop form from submitting normally
        event.preventDefault();
        
        if (SendMail){
            // Get some values from elements on the page
            var $form = $( this ),
                name = $form.find( "input[name='name']" ).val(),
                mail = $form.find( "input[name='mail']" ).val(),
                text = $form.find( "input[name='comment']" ).val(),
                url = $form.attr( "action" );
            SendMailDataToServer(url, name, mail, text, false);
        }
        else
        {
            //reCapcha... show feedback to the user...
            swal("reCaptcha", "reCaptcha not Valdated. :(", "error");
        }
    });
    
    //and with the Share button...
    new Share(".share-button", {
        networks: {
            pinterest: {
                enabled: false,
            }
        }
    });
});