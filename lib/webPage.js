/* Show Windows Size... follow the resizing events...*/
function SayWho () {
  var ua = navigator.userAgent, tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR\/(\d+)/)
    if (tem != null) return 'Opera ' + tem[1];
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(' ');
}

//what happens when resize is done to the browser window...
$(window).resize(function () {
  ShowBrowserDetails();
});

//insert data showing browser name, width and height...
function ShowBrowserDetails() {
  $("#window-size").empty();
  $("#window-size").append("<p>" + SayWho() + " [" + $(window).width() + "," + $(window).height() + "]</p>");
}

//document ready event ----------
$(document).ready(function () {
  ShowBrowserDetails();
});
