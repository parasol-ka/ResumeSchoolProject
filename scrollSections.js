/**
 Initializes and configures the ScrollReveal animation for elements with the class `.info-section`.

 Dependencies:
 - ScrollReveal.js library must be included in the project.
 */
ScrollReveal().reveal('.info-section', {
    delay: 200,         
    duration: 1000,     
    easing: 'ease-out',
    distance: '30px',  
    origin: 'bottom',  
    interval: 200,      
    reset: false        
  });