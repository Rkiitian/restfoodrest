window.onscroll = function() {
  var header = document.querySelector(".js-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}