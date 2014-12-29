$(document).ready(function () {
  toastr.options = {
  "showDuration": null,
  "timeOut": null
};

  function checkStorage() {
    var latest = document.getElementsByClassName('row')[0].getAttribute("data-pid");
    var pathname = location.host+location.pathname;
    var lastVisited = localStorage.getItem(pathname);
    // checks to see if there is a new post
    if (lastVisited !="" && lastVisited < latest) {
      // if there are some posts
      if($("p[data-pid='"+lastVisited+"']:first")){
        $("p[data-pid='" + lastVisited + "']").css({
          "border-top":"3px solid red",
          "padding-top":"10px"
        });
        var count = $("p[data-pid='"+lastVisited+"']").prevAll().length - 1;
        toastr.info(count+" new posts.<br>Older posts begin at red line.");
      }
      // if all posts on the page are new
      else{
        toastr.info("All posts are new.<br>There may be others on the next page.");
      }
    }
    // if there are no new posts
    else if($("p[data-pid='"+lastVisited+"']:first")) {
      toastr.info("No new posts.<br>Try again later.");
    }
    localStorage.setItem(pathname, latest);
  }

  checkStorage();
});