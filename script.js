ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 2000 });
ScrollReveal().reveal('.d-block');
ScrollReveal().reveal('.nada', { delay: 500 });

/*/$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
Get the button:
mybutton = document.getElementById("ir-arriba");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
/*/
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
$(document).ready(function() {
  // Binding event for user if they clicks on scroll to bottom icon
  $('.scrollBottom').click(function() {
       var windowHeight = $(window).height();
       var scrollHeight = $('body')[0].scrollHeight;
       $("html, body").stop().animate({scrollTop: scrollHeight - windowHeight});
  });
});
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

$(document).ready(function() {

     // Binding event for user if they clicks on scroll to up icon
     $('.scrollTop').click(function() {
          $("html, body").animate({scrollTop: 0});
     });

     // if user scrolls down the page then make the
     // scroll to top icon visible else hide it
     $(window).scroll(function() {
       if ($(this).scrollTop() > pos.top + topPart.height()) {
          $('.scrollTop').show();
       } else if ($(this).scrollTop() <= pos.top) {
          $('.scrollTop').hide();
       }
     });
});
