// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  handleMouseEnter() {
    text.innerText = "Mouse is here!";
    text.style.color = colors[0];
  },

  handleMouseLeave() {
    text.innerText = "Mouse is gone!";
    text.style.color = colors[1];
  },

  handleWindowResize() {
    text.innerText = "You just resized!";
    text.style.color = colors[2];
  },

  handleMouseClickRight() {
    text.innerText = "That was a right click!";
    text.style.color = colors[4];
  }
};

const text = document.querySelector("h2");

text.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
text.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleMouseClickRight);
