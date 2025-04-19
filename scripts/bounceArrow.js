/**
 This script creates a bouncing animation effect for an HTML element with the ID "arrow".
 Uses javascript only.
 */
const arrow = document.getElementById("arrow");
  let direction = 1;
  let bounceAmount = 10;

  setInterval(() => {
    arrow.style.transform = `translateY(${direction * bounceAmount}px)`;
    direction *= -1;
  }, 300); 