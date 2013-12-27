$(document).ready(function () {
  checkCookie();
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }

  function checkCookie() {
    var latest = document.getElementsByClassName('row')[0].getAttribute("data-pid");
    var pathname = location.host+location.pathname;
    var lastVisited = getCookie(pathname);
    if (lastVisited != "" && lastVisited < latest) {
      if($("p[data-pid='"+lastVisited+"']").length ==0){
        $("<p>All posts are new</p>").insertAfter(".toc_legend").not(".bottom").css({
          "color":"red",
          "font-weight":"bold",
          "margin-bottom":"0",
          "padding-top":"10px"
        });
      }
      else{
        $("p[data-pid='" + lastVisited + "']").css({
          "border-top":"3px solid red",
          "padding-top":"10px"
        });
      }
    }
    else {
      $("<p>No New Posts</p>").insertAfter(".toc_legend").not(".bottom").css({
        "color":"red",
        "font-weight":"bold",
        "margin-bottom":"0",
        "padding-top":"10px"
      });
    }
    setCookie(pathname, latest, 7);
  }
});

