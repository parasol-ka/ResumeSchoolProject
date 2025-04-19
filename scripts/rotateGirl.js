/**
 Rotates elements with the class "girl" based on mouse movement over the header.
 
 This script adds an interactive effect where the "frontGirl" and "backGirl" elements
 rotate around the Z-axis depending on the horizontal position of the mouse within the header.
  
 - The rotation angle is proportional to the mouse's position relative to the header's width.
 - The "frontGirl" rotates more prominently, while the "backGirl" rotates at 60% of the frontGirl's rotation.
 - When the mouse leaves the header, the rotation resets to 0 degrees.
  
 Event Listeners:
 - `mousemove`: Calculates the rotation based on the mouse's position and applies it to the elements.
 - `mouseleave`: Resets the rotation of the elements to 0 degrees.
 
 Uses javascript only.
 */
const header = document.querySelector("header");
const frontGirl = document.querySelector(".girl:not(.back)");
const backGirl = document.querySelector(".girl.back");

header.addEventListener("mousemove", (e) => {
  const rect = header.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const width = rect.width;
  const percentX = (x / width - 0.5) * 2;

  const maxRotation = 5;
  const rotateZ = percentX * maxRotation;

  
  frontGirl.style.transform = `translate(-50%, -50%) rotateZ(${rotateZ}deg)`;
  backGirl.style.transform = `translate(-50%, -50%) rotateZ(${rotateZ * 0.6}deg)`;
});

header.addEventListener("mouseleave", () => {
  frontGirl.style.transform = `translate(-50%, -50%) rotateZ(0deg)`;
  backGirl.style.transform = `translate(-50%, -50%) rotateZ(0deg)`;
});
