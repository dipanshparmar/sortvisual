// importing visualization
import updateDiv from "../visualization.js";

// collecting all the child divs
const divs = document.querySelector("#visualizer-container").children;

// function to perform comb sort
function combsort(arr, timeout)
{
 function is_array_sorted(arr) {
      var sorted = true;
      for (var i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              sorted = false;
              break;
          }
      }
      return sorted;
  }
 
  var iteration_count = 0;
  var gap = arr.length - 2;
  var decrease_factor = 1.25;
 
  // Repeat iterations Until array is not sorted
  
  while (!is_array_sorted(arr)) 
  {
      // If not first gap  Calculate gap
      if (iteration_count > 0)
         gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);
 
  // Set front and back elements and increment to a gap
      var front = 0;
      var back = gap;
      while (back <= arr.length - 1)
      {
          // color updates for the iteration
          updateDiv(divs[front], "rgb(225, 186, 253)", timeout);
          updateDiv(divs[front], "blue", timeout);
          updateDiv(divs[front], "rgb(225, 186, 253)", timeout);
          updateDiv(divs[back], "rgb(225, 186, 253)", timeout);
          updateDiv(divs[back], "blue", timeout);
          updateDiv(divs[back], "rgb(225, 186, 253)", timeout);
          // Swap the elements if they are not ordered
          if (arr[front] > arr[back])
          {
              var temp = arr[front];
              arr[front] = arr[back];
              updateDiv(divs[front], "green", timeout);
              updateDiv(divs[front], "red", timeout, arr[back]); // color and size update
              updateDiv(divs[front], "rgb(225, 186, 253)", timeout);
              arr[back] = temp;
              updateDiv(divs[back], "green", timeout);
              updateDiv(divs[back], "red", timeout, arr[back]); // colors and size update
              updateDiv(divs[back], "rgb(225, 186, 253)", timeout);
          }

          // Increment and re-run swapping
          front += 1;
          back += 1;
      }
      iteration_count += 1;
  }
}

export default combsort;