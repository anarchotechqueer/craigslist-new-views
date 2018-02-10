function checkStorage() {

  var latestNode = document.getElementsByClassName("result-row")[0];

  if (latestNode) {
    var latest = latestNode.getAttribute("data-pid");
    var pathname = location.host+location.pathname;
    var lastVisited = localStorage.getItem(pathname);

    var display = false, sub = "", heading = "";

    if(latest && lastVisited) {
      if (latest == lastVisited) {
        display = true;
        heading = "No new posts.";
        sub = "Try again later.";
      }
      else if(lastVisited < latest) {
        var lastVisitedString = "li[data-pid='" + lastVisited+ "']";
        display = true;

        console.log(lastVisitedString);

        lastVisitedNode = document.querySelector(lastVisitedString);

        console.log(lastVisitedNode);

        if(lastVisitedNode) {

          lastVisitedNode.insertAdjacentHTML("beforebegin", "<div class='new-views'></div>");

          var prevAll = true;

          prevAll = [].filter.call(lastVisitedNode.parentNode.children, function (htmlElement) {
            return (htmlElement === lastVisitedNode) ? prevAll = false : prevAll;
          });

          // remove count for added new-line div
          var count = prevAll.length -1;

          if(count == 1) {
            heading = count + " new post.";
          }
          else {
            heading = count + " new posts.";
          }

          sub = "Older posts begin at dividing line.";
        }
        else {
          heading = "All posts are new.";
          sub = "There may be others on the next page.";
        }

        // first dropdown controls views
        // last child is 'map' view
        if (document.getElementsByClassName("dropdown-list")[0].getElementsByClassName("dropdown-item")[3].classList.contains("sel")) {
          sub +=" Switch out of 'map' view to see.";
        }
      } 
    }

    if (display) {
      var popupNode = document.createElement("DIV");

      var headingNode = document.createElement("DIV");
      var headingText = document.createTextNode(heading);
      headingNode.appendChild(headingText);
      var headingAtt = document.createAttribute("class");
      headingAtt.value = "heading";
      headingNode.setAttributeNode(headingAtt);

      var subNode = document.createElement("DIV");
      var subText = document.createTextNode(sub);
      subNode.appendChild(subText);
      var subAtt = document.createAttribute("class");
      subAtt.value = "sub";
      subNode.setAttributeNode(subAtt);

      popupNode.appendChild(headingNode);
      popupNode.appendChild(subNode);

      var popupAtt = document.createAttribute("class");
      popupAtt.value = "new-views-popup";
      popupNode.setAttributeNode(popupAtt);

      popupNode.onclick = function() {
        var hideAtt = document.createAttribute("class");
        hideAtt.value = "hidden";
        popupNode.setAttributeNode(hideAtt);
        return false;
      };
      
      document.querySelector("body").appendChild(popupNode);
    }

  localStorage.setItem(pathname, latest);
  }
}

checkStorage();