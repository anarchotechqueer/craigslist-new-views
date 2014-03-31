$(document).ready(function () {

  function checkStorage() {
    // grabs ID of latest post on page
    var latest = document.getElementsByClassName('row')[0].getAttribute("data-pid");

    // url, does not include posts (this is intentional)
    var pathname = location.host+location.pathname;

    // grabs the last post seen
    var lastVisited = localStorage.getItem(pathname);

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

    localStorage.setItem(pathname, latest);
  }
  checkStorage();
});