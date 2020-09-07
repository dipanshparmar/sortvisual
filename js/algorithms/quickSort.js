import updateDiv from "../visualization.js";

const divs = document.querySelector("#visualizer-container").children;

export default function quickSort(array, low, high, timeout) {
  let pivot;

  // termination condition
  if (high > low) {
    pivot = partition(array, low, high, timeout);
    updateDiv(divs[pivot], "orange", timeout);
    quickSort(array, low, pivot - 1, timeout);
    // updateDiv(divs[pivot], "green", timeout)
    quickSort(array, pivot + 1, high, timeout);
    // updateDiv(divs[pivot], "green", timeout)
  }
  updateDiv(divs[pivot], "green", timeout)
}

function partition(array, low, high, timeout) {
  let left,
    right,
    pivot_item = array[low];

  left = low;
  right = high;

  while (left < right) {
    // to add the green color to the first element
    updateDiv(divs[left], "green", timeout);
    // move left while item < pivot
    while (array[left] <= pivot_item) {
      left++;
      // setting bakcground green of the left element
      updateDiv(divs[left], "green", timeout);
    }

    // move right while item > pivot
    while (array[right] > pivot_item) {
      // to add the green color to the last element
      updateDiv(divs[right], "green", timeout);
      right--;
      // setting bakcground green of the right element
      updateDiv(divs[right], "green", timeout);
    }

    if (left < right) {
      // don't change anything
      // for a good visual while swapping
      swap(array, left, right, timeout);
      updateDiv(divs[left], "green", timeout);
      updateDiv(divs[right], "green", timeout);
    }
  }

  // right is final position for the pivot
  array[low] = array[right];
  updateDiv(divs[low], "green", timeout, array[right]);
  array[right] = pivot_item;
  updateDiv(divs[right], "green", timeout, pivot_item);

  // chnaging back to green
  updateDiv(divs[low], "green", timeout, array[right]);
  return right;
}

function swap(array, firstPos, secondPos, timeout) {
  const temp = array[firstPos];
  array[firstPos] = array[secondPos];
  updateDiv(divs[firstPos], "red", timeout, array[secondPos]);
  array[secondPos] = temp;
  updateDiv(divs[secondPos], "red", timeout, temp);
}
