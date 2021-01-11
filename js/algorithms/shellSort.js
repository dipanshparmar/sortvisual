import updateDiv from "../visualization.js";

const divs = document.querySelector("#visualizer-container").children;

function shellSort(arr, timeout) {
	let n = arr.length;

	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			let temp = arr[i];
			
			let j;
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
                updateDiv(divs[j], 'yellow', timeout);
                arr[j] = arr[j-gap];
                updateDiv(divs[j], 'green', timeout, arr[j - gap]);
			}

            updateDiv(divs[j], 'yellow', timeout);
            arr[j] = temp;
            updateDiv(divs[j], 'green', timeout, arr[j]);
		}
	}
}

export default shellSort;