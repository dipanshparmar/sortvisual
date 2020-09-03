// setting delay so that each div can be visualize
let delay = 0;

function updateDiv(currentElement, backgroundColor, timeout, height) {
  window.setTimeout(() => {
    currentElement.style.backgroundColor = backgroundColor;
    currentElement.style.height = `${height}vh`;
  }, (delay += timeout)); // increasing the delay value with respect to the speed
}

export default updateDiv;