/**
 Initializes a Typed.js instance on the element with the ID "hello-vertical"
 once the DOM content is fully loaded. The text "HELLO" is typed with a 
 speed of 300ms per character, without looping.
 
 Dependencies:
 - Typed.js library must be included in the project for this code to work.
 
 */
document.addEventListener("DOMContentLoaded", function () {
    new Typed("#hello-vertical", {
      strings: ["HELLO"],
      typeSpeed: 300,
      loop: false,
      showCursor: false      
    });
  });