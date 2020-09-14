import updateDiv from "../visualization.js";

const divs = document.querySelector("#visualizer-container").children;

function swap(array, i, j, timeout) {
  updateDiv(divs[i], "yellow", timeout, array[i]); // color update
  updateDiv(divs[j], "yellow", timeout, array[j]); // color update

  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  updateDiv(divs[i], "yellow", timeout, array[i]); // color update
  updateDiv(divs[j], "yellow", timeout, array[j]); // color update

  updateDiv(divs[i], "rgb(225, 186, 253)", timeout, array[i]); // color update
  updateDiv(divs[j], "rgb(225, 186, 253)", timeout, array[j]); // color update
}

function maxHeapify(array, n, i, timeout) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && array[l] > array[largest]) {
    largest = l;
  }

  if (r < n && array[r] > array[largest]) {
    largest = r;
  }

  if (largest != i) {
    swap(array, i, largest, timeout);

    maxHeapify(array, n, largest, timeout);
  }
}

function heapSort(array, timeout) {

  let arrayLength = array.length;
  for (let i = Math.floor(arrayLength / 2) - 1; i >= 0; i--) {
    maxHeapify(array, arrayLength, i, timeout);
  }

  let i;
  for (i = arrayLength - 1; i > 0; i--) {
    swap(array, 0, i, timeout);
    updateDiv(divs[i], "green", timeout, array[i]); // color update
    updateDiv(divs[i], "yellow", timeout, array[i]); // color update

    maxHeapify(array, i, 0, timeout);
    updateDiv(divs[i], "red", timeout, array[i]); // color update
    updateDiv(divs[i], "green", timeout, array[i]); // color update
  }
  updateDiv(divs[i], "green", timeout, array[i]); // color update
}

export default heapSort;
