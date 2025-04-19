/**
 Initializes the sparkling effect on the header element.
 Sparkles are generated based on mouse movement speed and appear randomly within the header.
 
 Dependencies:
 - jQuery library is required for DOM manipulation and event handling.
  
 Functions:
 - `generateSparkle`: Creates and appends a sparkle image at a random position within the header.
 - `sparkleLoop`: Controls the interval for generating sparkles based on mouse speed.
  
 Event Listeners:
 - Tracks mouse movement to calculate speed using the `mousemove` event.

 */

$(function () {
    const $header = $("header");
    const sparkleImages = [
      "img/sparkling_pink.webp",
      "img/sparkling_purple.webp"
    ];
  
    let lastX = 0, lastY = 0;
    let lastTime = performance.now();
    let speed = 0;
  
    // Suivi de la vitesse de la souris
    $(document).on("mousemove", function (e) {
      const now = performance.now();
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dt = now - lastTime;
  
      const distance = Math.sqrt(dx * dx + dy * dy);
      speed = distance / dt;
  
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;
    });

    function generateSparkle() {
      const sparkle = $("<img>")
        .attr("src", sparkleImages[Math.floor(Math.random() * sparkleImages.length)])
        .addClass("sparkling-generated");
    
      const width = $header.width();
      const height = $header.height();
    
      const sparkleWidth = width * 0.03;
    
      const x = Math.random() * (width - sparkleWidth*2);
      const y = Math.random() * height;
    
      sparkle.css({ left: x, top: y });
    
      $header.append(sparkle);
    
      setTimeout(() => sparkle.remove(), 2000);
    }
    
  

    function sparkleLoop() {
      const interval = Math.max(50, 500 - speed * 3000);
      generateSparkle();
      setTimeout(sparkleLoop, interval);
    }
  
    sparkleLoop();
  });