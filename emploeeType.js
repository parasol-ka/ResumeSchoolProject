const split = new SplitType("#future-employee i", { types: "chars" });

split.chars.forEach(char => {
  char.style.opacity = 0;
  char.style.transform = "translateY(20px)";
});

gsap.to(split.chars, {
  y: 0,
  opacity: 1,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.05
});
