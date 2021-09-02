import updateDiv from "../visualization.js";

// getting the divs
const divs = document.querySelector("#visualizer-container").children;

function swap(array, i, j, timeout, afterColor) {
    updateDiv(divs[i], "yellow", timeout, array[i]); // color update
    updateDiv(divs[j], "yellow", timeout, array[j]); // color update

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    updateDiv(divs[i], "yellow", timeout, array[i]); // color update
    updateDiv(divs[j], "yellow", timeout, array[j]); // color update

    updateDiv(divs[i], afterColor, timeout, array[i]); // color update
    updateDiv(divs[j], afterColor, timeout, array[j]); // color update
}

const cocktailShakerSort = (arr, timeout) => {
    let max = arr.length - 1;
    let min = 0;
    while(min < max){
        updateDiv(divs[min], 'red', timeout)
        let biggest = min;
        let smallest = max;

        for (var i = min; i <= max; i++) {
            updateDiv(divs[i], 'red', timeout);
            if(arr[biggest] < arr[i]) {
                biggest = i;
            }
        }

        if(max != biggest){ //swap the items
            let aux = arr[max];
            swap(arr, max, biggest, timeout, 'red');
            updateDiv(divs[max], 'green', timeout);
        }

        max--;

        for (var j = max; j >= min; j--) {
            updateDiv(divs[j], 'green', timeout);
            if(arr[smallest] > arr[j]) {
                smallest = j;
            }
        }
        if(min != smallest){ //swap the items
            let aux2 = arr[min];
            swap(arr, min, smallest, timeout, 'green');
        }
        min++;
    }
}

export default cocktailShakerSort;
