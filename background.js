$(document).ready(function () {

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

    // Makes the toastr notification
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "positionClass": "toast-top-right",
      "onclick": null,
      "timeOut": "null",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

    // checks to see if there is a new post
    if (lastVisited !="" && lastVisited < latest) {
      // if there are some posts
      if($("p[data-pid='"+lastVisited+"']")[0]){
        $("p[data-pid='" + lastVisited + "']").css({
          "border-top":"3px solid red",
          "padding-top":"10px"
        });
        var count = $("p[data-pid='"+lastVisited+"']").prevAll().length - 1;
        var msg = count+ " new posts.";
        toastr.info('Older posts begin at red line.',msg);
      }
      // if all posts on the page are new
      else{
        toastr.info('There may be others on the next page.','All posts are new.');
      }
    }
    // if there are no new posts
    else if($("p[data-pid='"+lastVisited+"']")[0]) {
      toastr.info('Try again later.','No new posts.');
    }

    setCookie(pathname, latest, 7);
  }
  $('.toast').css("background-color","#030303");
  checkCookie();
});


