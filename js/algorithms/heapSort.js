import updateDiv from "../visualization.js";

const divs = document.querySelector("#visualizer-container").children;

function swap(array, i, j, timeout) {
  updateDiv(divs[i], "red", timeout, array[i]);
  updateDiv(divs[j], "red", timeout, array[j]);

  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  updateDiv(divs[i], "red", timeout, array[i]);
  updateDiv(divs[j], "red", timeout, array[j]);

  updateDiv(divs[i], "blue", timeout, array[i]);
  updateDiv(divs[j], "blue", timeout, array[j]);
}

function maxHeapify(array, n, i, timeout) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && array[l] > array[largest]) {
    if (largest != i) {
      updateDiv(divs[largest], "blue", timeout, array[largest]);
    }

    largest = l;

    updateDiv(divs[largest], "red", timeout, array[largest]);
  }

  if (r < n && array[r] > array[largest]) {
    if (largest != i) {
      updateDiv(divs[largest], "blue", timeout, array[largest]);
    }

    largest = r;

    updateDiv(divs[largest], "red", timeout, array[largest]);
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
    updateDiv(divs[i], "green", timeout, array[i]);
    updateDiv(divs[i], "yellow", timeout, array[i]);

    maxHeapify(array, i, 0, timeout);
    updateDiv(divs[i], "blue", timeout, array[i]);
    updateDiv(divs[i], "green", timeout, array[i]);
  }
  updateDiv(divs[i], "green", timeout, array[i]);
}

export default heapSort;
