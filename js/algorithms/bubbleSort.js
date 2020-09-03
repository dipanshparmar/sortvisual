// importing visualization
import updateDiv from "../visualization.js";

// function to perform bubbleSort
function bubbleSort(array, delayDuration) {
  // collecting all the child divs
  const divs = document.querySelector("#visualizer-container").children;

  // bubble sort functioning
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // updating divs for the first iteration
      updateDiv(divs[j], "green", delayDuration);

      if (array[j] > array[j + 1]) {
        /****if there is going to be a swap then the jth element will become red and the jth + 1 element will become orange */
        // if array[j] > array[j + 1] then j will get red color
        updateDiv(divs[j], "red", delayDuration);
        // and j + 1 will get orange color
        updateDiv(divs[j + 1], "orange", delayDuration, array[j + 1])

        // to store the value of array[j] temporarily
        const temp = array[j];

        // swapping
        array[j] = array[j + 1];
        // updating the colors and height
        updateDiv(divs[j], "green", delayDuration, array[j + 1])
        // swapping
        array[j + 1] = temp;
        // updating the colors and height
        updateDiv(divs[j + 1], "green", delayDuration, temp)
      }
    }
  }
}

export default bubbleSort;
