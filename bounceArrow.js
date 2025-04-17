const arrow = document.getElementById("arrow");
  let direction = 1;
  let bounceAmount = 10; // hauteur du rebond en pixels

  setInterval(() => {
    arrow.style.transform = `translateY(${direction * bounceAmount}px)`;
    direction *= -1;
  }, 300); // change toutes les 300ms pour un effet de rebond continu