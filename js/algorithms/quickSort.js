import updateDiv from "../visualization.js";

// to store the last pivot
let toChange;

const divs = document.querySelector("#visualizer-container").children;

function quickSort(array, low, high, timeout) {
  let pivot;

  // termination condition
  if (high > low) {
    pivot = partition(array, low, high, timeout);
    // to store the index of the previous pivot
    toChange = divs[pivot];
    quickSort(array, low, pivot - 1, timeout);
    quickSort(array, pivot + 1, high, timeout);
    updateDiv(toChange, "green", timeout);
  }
}

function partition(array, low, high, timeout) {
  let left,
    right,
    pivot_item = array[low];

  left = low;
  right = high;
  while (left < right) {
    // move left while item < pivot
    while (array[left] <= pivot_item) {
      updateDiv(divs[left], "darkgreen", timeout);
      updateDiv(divs[left], "green", timeout);
      left++;
    }

    // move right while item > pivot
    while (array[right] > pivot_item) {
      updateDiv(divs[right], "darkgreen", timeout);
      updateDiv(divs[right], "green", timeout);
      right--;
    }

    if (left < right) {
      updateDiv(divs[left], "red", timeout);
      updateDiv(divs[right], "red", timeout);
      swap(array, left, right, timeout);
    }
  }

  // I'm not sure what is happening here, or maybe I know. It seems like a swapping process
  array[low] = array[right];
  updateDiv(divs[low], "green", timeout, array[right]);
  array[right] = pivot_item;
  updateDiv(toChange, "green", timeout); // changing the previous pivot back to green
  updateDiv(divs[right], "orange", timeout, pivot_item);

  return right;
}

function swap(array, firstPos, secondPos, timeout) {
  const temp = array[firstPos];
  array[firstPos] = array[secondPos];
  updateDiv(divs[firstPos], "red", timeout, array[secondPos]);
  array[secondPos] = temp;
  updateDiv(divs[secondPos], "red", timeout, temp);

  // making the divs back to green after swap
  updateDiv(divs[firstPos], "green", timeout);
  updateDiv(divs[secondPos], "green", timeout);
}

export default quickSort;
