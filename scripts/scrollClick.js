/**
 Attaches a click event listener to the element with the ID "future-employee".
 When clicked, the page smoothly scrolls to the main resume part.
 
 The scrolling animation lasts 0.5 sec.

 Dependencies:
 - jQuery
 */
 $(function () {
    $("#future-employee").on("click", function () {
      $("html, body").animate({
        scrollTop: $("#main").offset().top
      }, 500);
    });
  });
  
