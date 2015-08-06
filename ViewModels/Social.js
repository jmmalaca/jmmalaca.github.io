/* global Share */
/* global swal */

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

    //Mail Box...
    $("#Social-Page").append("<div class=\"Mail-Box\"></div>");
    $(".Mail-Box").append("<img class=\"Mail\" src=\"images/Social/mail.png\" />");
    $(".Mail-Box").append("<p id=\"TitleMail\" class=\"BlockSelection\"> Drop me a line </p>");
    $(".Mail-Box").append("<form class=\"MailMe\" id =\"MailForm\" action=\"mailto:jose.miguel.malaca@me.com\" method=\"post\">"
        + "<input id=\"inputName\" type=\"text\" name=\"name\" placeholder=\"name\" required=\"required\" size=\"15\">"
        + "<input id=\"inputMail\" type=\"email\" name=\"mail\" placeholder=\"email\" required=\"required\" size=\"25\">"
        + "<br><br><input id=\"inputText\" type=\"text\" name=\"comment\" placeholder=\"send email is in construction... almost there... ;)\" required=\"required\" size=\"50\">"
        + "<br><br><input type=\"submit\" class=\"btn btn-sm btn-primary\" value=\"Send\">"
        + "</form>");
}

//document ready event ----------
$(document).ready(function() {

    AddSocialData();

    //what happens in the Mail-Box...
    $("#MailForm").submit(function (event) {
        event.preventDefault();
        
        //show some feedback to the user...
        swal("Mail sended.", "send email is in construction... almost there... ;)", "success");
        
        //clean form inputs data...
        document.getElementById("inputName").value = "";
        document.getElementById("inputMail").value = "";
        document.getElementById("inputText").value = "";
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