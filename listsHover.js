document.addEventListener("DOMContentLoaded", () => {
    const ring = document.createElement("div");
    ring.classList.add("cursor-ring");
    document.body.appendChild(ring);

    const listItems = document.querySelectorAll(".sections-lists li");

    listItems.forEach(li => {
      li.addEventListener("mouseenter", () => {
        ring.style.display = "block";
      });

      li.addEventListener("mousemove", e => {
        const x = e.pageX;
        const y = e.pageY;

        ring.style.left = `${x - 8}px`;  // 8 = moitié largeur
        ring.style.top = `${y - 8}px`;
      });

      li.addEventListener("mouseleave", () => {
        ring.style.display = "none";
      });
    });
  });