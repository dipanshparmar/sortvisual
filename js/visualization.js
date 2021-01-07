import { removeComplexities } from "./main.js";

// setting delay so that each div can be visualize
let delay = 0;

export default function updateDiv(
  currentElement,
  backgroundColor,
  timeout,
  height
) {
  window.setTimeout(() => {
    currentElement.style.backgroundColor = backgroundColor;
    currentElement.style.height = `${height}vh`;
  }, (delay += timeout)); // increasing the delay value with respect to the speed
}

// to set the delay to zero so that next sorting algorithm can be used asap
function setDelayToZero() {
  delay = 0;
}

// to disable the button and sliders
function disableButtonsAndInputs() {
  // disabling sorting buttons
  document.querySelectorAll(".button").forEach((button) => {
    button.classList.add("disableButtonsAndInputs");
  });

  // diabling input values
  document.querySelectorAll("input").forEach((input) => {
    input.classList.add("disableButtonsAndInputs");
  });

  // disabling the new array button
  document.querySelector("#new-array").classList.add("disableButtonsAndInputs");
}

function enableButtonsAndInputs() {
  setTimeout(() => {
    // removing disable class
    document.querySelectorAll(".button").forEach((button) => {
      button.classList.remove("disableButtonsAndInputs");
    });
    // removing disable class
    document.querySelectorAll("input").forEach((input) => {
      input.classList.remove("disableButtonsAndInputs");
    });

    // removing the disable class
    document
      .querySelector("#new-array")
      .classList.remove("disableButtonsAndInputs");

    // Adding wildcard (calling it wildcard because it doesn't match with the function name and added it later :P)
    // remove addition information
    removeComplexities();
  }, delay); // delay to enable the buttons after complete visualization
}

export { setDelayToZero, disableButtonsAndInputs, enableButtonsAndInputs };
