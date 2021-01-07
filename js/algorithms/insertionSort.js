import updateDiv from "../visualization.js";

const divs = document.querySelector("#visualizer-container").children;

function insertionSort(inputArr, timeout) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        updateDiv(divs[i], "red", timeout);
        // Choosing the first element in our unsorted subarray
        let current = inputArr[i];
        // The last element of our sorted subarray
        let j = i-1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j+1] = inputArr[j];
            updateDiv(divs[j + 1], "green", timeout, inputArr[j]); // color update
            j--;
            updateDiv(divs[j + 1], "yellow", timeout, inputArr[j]); // color update
        }
        inputArr[j+1] = current;
        updateDiv(divs[j + 1], "green", timeout, current); // color update
    }
}

export default insertionSort;
