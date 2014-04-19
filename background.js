$(document).ready(function () {

  function checkStorage() {
    var latest = document.getElementsByClassName('row')[0].getAttribute("data-pid");
    var pathname = location.host+location.pathname;
    var lastVisited = localStorage.getItem(pathname);

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
        alertify.log("<span class='alertify_title'>"+msg+"</span><br><span class='alertify_note'>Older posts begin at red line.</span>", "", 0);
      }
      // if all posts on the page are new
      else{
        alertify.log("<span class='alertify_title'>All posts are new.</span><br><span class='alertify_note'>There may be others on the next page.</span>", "", 0);
      }
    }
    // if there are no new posts
    else if($("p[data-pid='"+lastVisited+"']")[0]) {
      alertify.log("<span class='alertify_title'>No new posts.</span><br><span class='alertify_note'>Try again later.</span>", "", 0);
    }

    localStorage.setItem(pathname, latest);
  }

  checkStorage();

});