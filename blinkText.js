const text = document.getElementById("blinking-text");
  let visible = true;

  setInterval(() => {
    visible = !visible;
    text.style.opacity = visible ? "1" : "0";
  }, 500); // toutes les 1 seconde (0.5s fondu + 0.5s affiché)