/**
 * Animates typing of the word "HELLO" vertically inside an HTML element with the ID "hello-vertical".
 * Each letter is added one at a time with a delay of 400ms between each.
 *
 * Dependencies:
 * - jQuery library is required for DOM manipulation and event handling.

 */

$(function () {
  const text = "HELLO";
  const $target = $("#hello-vertical");
  $target.text(""); // Clear the target element before typing
  let index = 0;

  function typeLetter() {
    if (index < text.length) {
      $target.text($target.text() + text.charAt(index));
      index++;
      setTimeout(typeLetter, 400);
    }
  }

  typeLetter();
 });