// importing visualization
import updateDiv from "../visualization.js";

// quick sort function using recursion
function quickSort(array, lowerBound, upperBound, timeout) {
  let pivot;

  if (upperBound > lowerBound) {
    pivot = partition(array, lowerBound, upperBound, timeout);
    quickSort(array, lowerBound, pivot - 1, timeout);
    quickSort(array, pivot + 1, upperBound, timeout);
  }
}

function partition(array, lowerBound, upperBound, timeout) {
  // getting all the divs
  const divs = document.querySelectorAll("#visualizer-container div");

  // initializing variables
  let left,
    right,
    pivot = array[lowerBound];
  left = lowerBound;
  right = upperBound;

  // while left < right
  while (left < right) {
    updateDiv(divs[left], "red", timeout);
    // move left while item < pivot
    while (array[left] <= pivot) {
      left++;
      updateDiv(divs[left], "green", timeout, array[left]);
    }
    // move right while item > pivot
    while (array[right] > pivot) {
      right--;
      updateDiv(divs[right], "green", timeout, array[right]);
    }

    // conditional statement
    if (left < right) {
      swap(array, left, right, timeout);
    }
  }

  // right is the final position for the pivot
  array[lowerBound] = array[right];
  updateDiv(divs[lowerBound], "green", timeout, array[right]);
  array[right] = pivot;
  updateDiv(divs[right], "green", timeout, pivot);

  //   returning the position of new pivot
  return right;
}

// function for swapping
function swap(array, firstPosition, secondPosition, timeout) {
  // getting all the divs
  const divs = document.querySelectorAll("#visualizer-container div");

  const temp = array[firstPosition];
  array[firstPosition] = array[secondPosition];

  // adding the red color to the first part of the swapped club
  updateDiv(divs[firstPosition], "red", timeout, array[temp]);

  array[secondPosition] = temp;

  // adding the orange color to the second part of the swapped club
  updateDiv(divs[secondPosition], "orange", timeout, array[secondPosition]);
}

export default quickSort;
