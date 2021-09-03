// importing visualization
import updateDiv from "../visualization.js";

// getting the divs
const divs = document.querySelector("#visualizer-container").children;

// Function sort the array using Cycle sort
function cycleSort(arr, timeout)
{
    // length
    const n = arr.length;

    // traverse array elements and put it to on
    // the right place
    for (let cycle_start = 0; cycle_start <= n - 2; cycle_start++)
    {   
        // initialize item as starting point
        let item = arr[cycle_start];
        // updateDiv(divs[cycle_start], "rgb(225, 186, 253)", timeout);
        updateDiv(divs[cycle_start], "green", timeout);

        // Find position where we put the item. We basically
        // count all smaller elements on right side of item.
        let pos = cycle_start;
        for (let i = cycle_start + 1; i < n; i++) {
            if (arr[i] < item)
                pos++;
        }

        // If item is already in correct position
        if (pos == cycle_start)
            continue;

        // ignore all duplicate elements
        while (item == arr[pos])
            pos += 1;

        // put the item to it's right position
        if (pos != cycle_start)
        {
            let temp = item;
            item = arr[pos];
            updateDiv(divs[pos], "red", timeout);
            updateDiv(divs[pos], "green", timeout);
            arr[pos] = temp;
            updateDiv(divs[pos], "red", timeout);
            updateDiv(divs[pos], "green", timeout, temp);
        }

        // Rotate rest of the cycle
        while (pos != cycle_start)
        {
            pos = cycle_start;

            // Find position where we put the element
            for (let i = cycle_start + 1; i < n; i++) {
                updateDiv(divs[i], "rgb(225, 186, 253)", timeout);
                updateDiv(divs[i], "blue", timeout);
                if (arr[i] < item)
                    pos += 1;
            }

            // ignore all duplicate elements
            while (item == arr[pos]) {
                pos += 1;
            }

            // put the item to it's right position
            if (item != arr[pos]) {
                let temp = item;
                item = arr[pos];
                updateDiv(divs[pos], "red", timeout);
                updateDiv(divs[pos], "green", timeout);
                arr[pos] = temp;
                updateDiv(divs[pos], "red", timeout);
                updateDiv(divs[pos], "green", timeout, temp);
            }
        }
    }
}

export default cycleSort;