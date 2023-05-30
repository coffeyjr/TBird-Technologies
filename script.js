// For this tutorial on YT:
// https://youtu.be/V-CBdlfCPic

const primaryHeader = document.querySelector(".nav-content");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
  },
  { rootMargin: "50px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);


// highlight current day on opeining hours
$(document).ready(function() {
  $('.opening-hours li').eq(new Date().getDay()).addClass('today');
  });