const header = document.querySelector("header");
const frontGirl = document.querySelector(".girl:not(.back)");
const backGirl = document.querySelector(".girl.back");

header.addEventListener("mousemove", (e) => {
  const rect = header.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const width = rect.width;
  const percentX = (x / width - 0.5) * 2; // -1 à +1

  const maxRotation = 5;
  const rotateZ = percentX * maxRotation;

  // On conserve le centrage avec translate
  frontGirl.style.transform = `translate(-50%, -50%) rotateZ(${rotateZ}deg)`;
  backGirl.style.transform = `translate(-50%, -50%) rotateZ(${rotateZ * 0.6}deg)`;
});

header.addEventListener("mouseleave", () => {
  frontGirl.style.transform = `translate(-50%, -50%) rotateZ(0deg)`;
  backGirl.style.transform = `translate(-50%, -50%) rotateZ(0deg)`;
});
