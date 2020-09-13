// setting delay so that each div can be visualize
let delay = 0;

export default function updateDiv(currentElement, backgroundColor, timeout, height) {
  window.setTimeout(() => {
    currentElement.style.backgroundColor = backgroundColor;
    currentElement.style.height = `${height}vh`;
  }, (delay += timeout)); // increasing the delay value with respect to the speed
}

// to set the delay to zero so that next sorting algorithm can be used asap
function setDelayToZero() {
  delay = 0;
}

export { setDelayToZero };
