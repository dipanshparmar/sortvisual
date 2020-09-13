import updateDiv from "../visualization.js";

// getting the divs
const divs = document.querySelector("#visualizer-container").children;

function merge(array, start, mid, end, timeout) {
  let p = start,
    q = mid + 1;

  let Arr = [],
    k = 0;

  for (let i = start; i <= end; i++) {
    if (p > mid) {
      Arr[k++] = array[q++];
      updateDiv(divs[q - 1], "red", timeout, array[q - 1]); // color update
    } else if (q > end) {
      Arr[k++] = array[p++];
      updateDiv(divs[p - 1], "red", timeout, array[p - 1]); // color update
    } else if (array[p] < array[q]) {
      Arr[k++] = array[p++];
      updateDiv(divs[p - 1], "red", timeout, array[p - 1]); // color update
    } else {
      Arr[k++] = array[q++];
      updateDiv(divs[q - 1], "red", timeout, array[q - 1]); // color update
    }
  }

  for (let t = 0; t < k; t++) {
    array[start++] = Arr[t];
    updateDiv(divs[start - 1], "green", timeout, Arr[start - 1]); // color update
  }
}

function mergeSort(array, start, end, timeout) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    updateDiv(divs[mid], "yellow", timeout); // color update

    mergeSort(array, start, mid, timeout);
    mergeSort(array, mid + 1, end, timeout);

    merge(array, start, mid, end, timeout);
  }
}

export default mergeSort;
