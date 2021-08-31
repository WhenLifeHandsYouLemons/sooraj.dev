//Get the button
backtotopbutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

scroll_amount = 200;

function scrollFunction() {
  if (document.body.scrollTop > scroll_amount || document.documentElement.scrollTop > scroll_amount) {
    backtotopbutton.style.display = "block";
  } else {
    backtotopbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}