/**
 Toggles the visibility of an HTML element with the ID "blinking-text" 
 by changing its opacity between 1 (visible) and 0 (invisible) every 0.5 sec.
 
 This creates a blinking effect for the text.
 */
const text = document.getElementById("blinking-text");
  let visible = true;

  setInterval(() => {
    visible = !visible;
    text.style.opacity = visible ? "1" : "0";
  }, 500);