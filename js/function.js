// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("card_nav").style.height = "var(--header_height_min)";
  } else {
    document.getElementById("card_nav").style.height = "var(--header_height)";
  }
}