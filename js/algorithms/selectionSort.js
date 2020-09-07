import updateDiv from "../visualization.js";

// getting the divs
const divs = document.querySelector("#visualizer-container").children;

function selectionSort(arr, timeout) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      // for changing color on each iteration for clear vision
      updateDiv(divs[j - 1], "orange", timeout);
      updateDiv(divs[j - 1], "green", timeout);
      updateDiv(divs[j], "orange", timeout);
      updateDiv(divs[j], "green", timeout);

      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    if (min !== i) {
      // indicating that there is going to be a swap
      updateDiv(divs[min], "red", timeout);
      updateDiv(divs[i], "red", timeout);

      // swapping with color effects
      let tmp = arr[i];
      arr[i] = arr[min];
      updateDiv(divs[i], "red", timeout, arr[min]);
      arr[min] = tmp;
      updateDiv(divs[min], "red", timeout, tmp);

      // changing the bars color bakc to green after swap
      updateDiv(divs[i], "green", timeout);
      updateDiv(divs[min], "green", timeout);
    }

    // to show that this part of array is sorted
    updateDiv(divs[i], "purple", timeout)
  }
}

export default selectionSort;
