/*********imports****************/
import insertionSort from "./algorithms/insertionSort.js";
import bubbleSort from "./algorithms/bubbleSort.js";
import quickSort from "./algorithms/quickSort.js";
import selectionSort from "./algorithms/selectionSort.js";
import mergeSort from "./algorithms/mergeSort.js";
import heapSort from "./algorithms/heapSort.js";
import shellSort from "./algorithms/shellSort.js";
import cocktailShakerSort from "./algorithms/cocktailShakerSort.js";
import combsort from "./algorithms/combSort.js";

import { addComplexities } from "./main.js";

import {
  setDelayToZero,
  disableButtonsAndInputs,
  enableButtonsAndInputs,
} from "./visualization.js";

/*********************Variables********************/

// getting the main container
const visualizerContainer = document.querySelector("#visualizer-container");

// getting the size controller
const sizeController = document.querySelector("#size-control");

// heights for the bars
const maxHeight = "88";

// declaring global variable to store the speed value from the input
let initialSpeed = 0;
let timeout = 0;

// main array to display on the screen
let array = [];

/***************************************************/

/********************Function Calls*********************/

// for default screen when first time screen opens or reloads
getBarsForFifty();

/****************************************************/

/**********************Event listeners***************/

// handling the event on the combsort
document.querySelector('.comb').addEventListener('click', () => {
  // adding additional information
  addComplexities('O(n)', 'O(n^2)', 'O(n^2)', 'O(1)', 'Yes'); // TODO: update this

  // getting the speed value
  initialSpeed = parseInt(document.querySelector("#speed-control").value);

  // converting the speed value into the possible timeout value
  getTimeoutValue(initialSpeed);

  // disabling the buttons
  disableButtonsAndInputs();

  // performing insertion sort
  combsort(array, timeout);

  // enabling the buttons
  enableButtonsAndInputs();

  // to start next sorting algorithm asap (without any delay)
  setDelayToZero();
})

// handling the event on cycle sort button
document.querySelector(".cocktail-shaker").addEventListener("click", () => {
  // adding additional information
  addComplexities('O(n)', 'O(n^2)', 'O(n^2)', 'O(1)', 'Yes');

  // getting the speed value
  initialSpeed = parseInt(document.querySelector("#speed-control").value);

  // converting the speed value into the possible timeout value
  getTimeoutValue(initialSpeed);

  // disabling the buttons
  disableButtonsAndInputs();

  // performing insertion sort
  cocktailShakerSort(array, timeout);

  // enabling the buttons
  enableButtonsAndInputs();

  // to start next sorting algorithm asap (without any delay)
  setDelayToZero();
});

// handling the event on shell sort button
document.querySelector(".shell").addEventListener("click", () => {
  // adding additional information
  addComplexities('O(n)', 'Depends on gap sequence', 'n*log(n)^2 or n^(3/2)', '-', 'No');

  // getting the speed value
  initialSpeed = parseInt(document.querySelector("#speed-control").value);

  // converting the speed value into the possible timeout value
  getTimeoutValue(initialSpeed);

  // disabling the buttons
  disableButtonsAndInputs();

  // performing insertion sort
  shellSort(array, timeout);

  // enabling the buttons
  enableButtonsAndInputs();

  // to start next sorting algorithm asap (without any delay)
  setDelayToZero();
});

// handling the event on insertion sort button
document.querySelector(".insertion").addEventListener("click", () => {
  // adding additional information
  addComplexities('O(n)', 'O(n^2)', 'O(n^2)', 'O(1)', 'Yes');

  // getting the speed value
  initialSpeed = parseInt(document.querySelector("#speed-control").value);

  // converting the speed value into the possible timeout value
  getTimeoutValue(initialSpeed);

  // disabling the buttons
  disableButtonsAndInputs();

  // performing insertion sort
  insertionSort(array, timeout);

  // enabling the buttons
  enableButtonsAndInputs();

  // to start next sorting algorithm asap (without any delay)
  setDelayToZero();
});

// handling the event on heap sort button
document.querySelector(".heap").addEventListener("click", () => {
  // adding additional information
  addComplexities('O(n*log(n))', 'O(n*log(n))', 'O(n*log(n))', 'O(1)', 'No');

  // getting the speed value
  initialSpeed = parseInt(document.querySelector("#speed-control").value);

  // converting the speed value into the possible timeout value
  getTimeoutValue(initialSpeed);

  // disabling the buttons
  disableButtonsAndInputs();

  // performing heap sort
  heapSort(array, timeout);

  // enabling the buttons
  enableButtonsAndInputs();

  // to start next sorting algorithm asap (without any delay)
  setDelayToZero();
});

// handling the event on selection sort button
document.querySelector(".selection").addEventListener("click", () => {
  // adding additional information
  addComplexities('O(n^2)', 'O(n^2)', 'O(n^2)', 'O(1)', 'No');

  // getting the speed value
  initialSpeed = parseInt(document.querySelector("#speed-control").value);

  // converting the speed value into the possible timeout value
  getTimeoutValue(initialSpeed);

  // disabling the buttons
  disableButtonsAndInputs();

  // performing selection sort
  selectionSort(array, timeout);

  // enabling the buttons
  enableButtonsAndInputs();

  // to start next sorting algorithm asap (without any delay)
  setDelayToZero();
});

// handling the event on merge sort button
document.querySelector(".merge").addEventListener("click", () => {
  // adding additional information
  addComplexities('O(n*log(n))', 'O(n*(log n))', 'O(n*log(n))', 'O(n)', 'Yes');

  // getting the speed value
  initialSpeed = parseInt(document.querySelector("#speed-control").value);

  // converting the speed value into the possible timeout value
  getTimeoutValue(initialSpeed);

  // disabling the buttons
  disableButtonsAndInputs();

  // performing merge sort
  mergeSort(array, 0, array.length - 1, timeout); // params: array and delay value

  // enabling the buttons
  enableButtonsAndInputs();

  // to start next sorting algorithm asap (without any delay)
  setDelayToZero();
});

// handling the event on quick sort button
document.querySelector(".quick").addEventListener("click", () => {
  // adding additional information
  addComplexities('O(n*log(n))', 'O(n^2)', 'O(n*logn(n))', '-', 'No');

  // getting the speed value
  initialSpeed = parseInt(document.querySelector("#speed-control").value);

  // converting the speed value into the possible timeout value
  getTimeoutValue(initialSpeed);

  // disabling the buttons
  disableButtonsAndInputs();

  // performing quick sort
  quickSort(array, 0, array.length - 1, timeout); // params: array and delay value

  // enabling the buttons
  enableButtonsAndInputs();

  // to start next sorting algorithm asap (without any delay)
  setDelayToZero();
});

// handling the event on bubble sort button
document.querySelector(".bubble").addEventListener("click", () => {
  // adding additional information
  addComplexities('O(n)', 'O(n^2)', 'O(n^2)', 'O(1)', 'Yes');

  // getting the speed value
  initialSpeed = parseInt(document.querySelector("#speed-control").value);

  // converting the speed value into the possible timeout value
  getTimeoutValue(initialSpeed);

  // disabling the buttons
  disableButtonsAndInputs();

  // performing bubble sort
  bubbleSort(array, timeout); // params: array and delay value

  // enabling the buttons
  enableButtonsAndInputs();

  // to start next sorting algorithm asap (without any delay)
  setDelayToZero();
});

// listening for the change on the size slider
sizeController.addEventListener("input", () => {
  if (sizeController.value == 10) {
    getBarsForTen();
  } else if (sizeController.value == 20) {
    getBarsForTwenty();
  } else if (sizeController.value == 30) {
    getBarsForThirty();
  } else if (sizeController.value == 40) {
    getBarsForForty();
  } else if (sizeController.value == 50) {
    getBarsForFifty();
  } else if (sizeController.value == 60) {
    getBarsForSixty();
  } else if (sizeController.value == 70) {
    getBarsForSeventy();
  } else if (sizeController.value == 80) {
    getBarsForEighty();
  } else if (sizeController.value == 90) {
    getBarsForNinty();
  } else {
    getBarsForHundred();
  }
});

// listening for the click on the new array button
document.querySelector("#new-array").addEventListener("click", () => {
  // calling the function to create new array according to the length of the bars
  getNewArrayFromButton(
    document.querySelectorAll("#visualizer-container div").length
  );

  // calling the function to display the newly generated array to the dom
  displayContentAccordingToTheArray(
    document.querySelectorAll("#visualizer-container div"),
    array
  );
});

/***************************************************/

/****************************functions****************/
// getting the possible setTimeout value
function getTimeoutValue(initialSpeed) {
  switch (initialSpeed) {
    case 0:
      timeout = 700;
      break;
    case 10:
      timeout = 600;
      break;
    case 20:
      timeout = 500;
      break;
    case 30:
      timeout = 400;
      break;
    case 40:
      timeout = 300;
      break;
    case 50:
      timeout = 200;
      break;
    case 60:
      timeout = 100;
      break;
    case 70:
      timeout = 50;
      break;
    case 80:
      timeout = 30;
      break;
    case 90:
      timeout = 10;
      break;
    case 100:
      timeout = 2;
      break;
    default:
      timeout = 50;
  }
}

// function when slider value is 100
function getBarsForHundred() {
  // displaying the bars into the dom. added them like this because of the performance issues
  document.querySelector(
    "#visualizer-container"
  ).innerHTML = `<div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>`;

  // adding class to the divs to make width perfect
  document.querySelectorAll("#visualizer-container div").forEach((div) => {
    div.style.width = "2px";
  });

  // getting the total length of all the div elements so that the array can be generated
  const lengthOfArray = document.querySelectorAll("#visualizer-container div")
    .length;

  // calling the function getArray to get a random array between the range of the length of the current bars
  getArray(lengthOfArray);

  // callig the function to set the heights according to the array values
  displayContentAccordingToTheArray(
    document.querySelectorAll("#visualizer-container div"),
    array
  );
}

// function when slider value is 90
function getBarsForNinty() {
  // displaying the bars into the dom. added them like this because of the performance issues
  document.querySelector(
    "#visualizer-container"
  ).innerHTML = `<div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>`;

  // adding class to the divs to make width perfect
  document.querySelectorAll("#visualizer-container div").forEach((div) => {
    div.style.width = "10px";
  });

  // getting the total length of all the div elements so that the array can be generated
  const lengthOfArray = document.querySelectorAll("#visualizer-container div")
    .length;

  // calling the function getArray to get a random array between the range of the length of the current bars
  getArray(lengthOfArray);

  // callig the function to set the heights according to the array values
  displayContentAccordingToTheArray(
    document.querySelectorAll("#visualizer-container div"),
    array
  );
}

// function when slider value is 80
function getBarsForEighty() {
  // displaying the bars into the dom
  displayBars(68);

  // adding class to the divs to make width perfect
  document.querySelectorAll("#visualizer-container div").forEach((div) => {
    div.style.width = "15px";
  });

  // getting the total length of all the div elements so that the array can be generated
  const lengthOfArray = document.querySelectorAll("#visualizer-container div")
    .length;

  // calling the function getArray to get a random array between the range of the length of the current bars
  getArray(lengthOfArray);

  // callig the function to set the heights according to the array values
  displayContentAccordingToTheArray(
    document.querySelectorAll("#visualizer-container div"),
    array
  );
}

// function when slider value is 70
function getBarsForSeventy() {
  // displaying the bars into the dom
  displayBars(54);

  // adding class to the divs to make width perfect
  document.querySelectorAll("#visualizer-container div").forEach((div) => {
    div.style.width = "20px";
  });

  // getting the total length of all the div elements so that the array can be generated
  const lengthOfArray = document.querySelectorAll("#visualizer-container div")
    .length;

  // calling the function getArray to get a random array between the range of the length of the current bars
  getArray(lengthOfArray);

  // callig the function to set the heights according to the array values
  displayContentAccordingToTheArray(
    document.querySelectorAll("#visualizer-container div"),
    array
  );
}

// function when slider value is 60
function getBarsForSixty() {
  // displaying the bars into the dom
  displayBars(44);

  // adding class to the divs to make width perfect
  document.querySelectorAll("#visualizer-container div").forEach((div) => {
    div.style.width = "25px";
  });

  // getting the total length of all the div elements so that the array can be generated
  const lengthOfArray = document.querySelectorAll("#visualizer-container div")
    .length;

  // calling the function getArray to get a random array between the range of the length of the current bars
  getArray(lengthOfArray);

  // callig the function to set the heights according to the array values
  displayContentAccordingToTheArray(
    document.querySelectorAll("#visualizer-container div"),
    array
  );
}

// function when slider value is 50
function getBarsForFifty() {
  // displaying the bars into the dom
  displayBars(37);

  // adding class to the divs to make width perfect
  document.querySelectorAll("#visualizer-container div").forEach((div) => {
    div.style.width = "30px";
  });

  // getting the total length of all the div elements so that the array can be generated
  const lengthOfArray = document.querySelectorAll("#visualizer-container div")
    .length;

  // calling the function getArray to get a random array between the range of the length of the current bars
  getArray(lengthOfArray);

  // callig the function to set the heights according to the array values
  displayContentAccordingToTheArray(
    document.querySelectorAll("#visualizer-container div"),
    array
  );
}

// function when slider value is 40
function getBarsForForty() {
  // displaying the bars into the dom
  displayBars(33);

  // adding class to the divs to make width perfect
  document.querySelectorAll("#visualizer-container div").forEach((div) => {
    div.style.width = "35px";
  });

  // getting the total length of all the div elements so that the array can be generated
  const lengthOfArray = document.querySelectorAll("#visualizer-container div")
    .length;

  // calling the function getArray to get a random array between the range of the length of the current bars
  getArray(lengthOfArray);

  // callig the function to set the heights according to the array values
  displayContentAccordingToTheArray(
    document.querySelectorAll("#visualizer-container div"),
    array
  );
}

// function when slider value is 30
function getBarsForThirty() {
  // displaying the bars into the dom
  displayBars(29);

  // adding class to the divs to make width perfect
  document.querySelectorAll("#visualizer-container div").forEach((div) => {
    div.style.width = "40px";
  });

  // getting the total length of all the div elements so that the array can be generated
  const lengthOfArray = document.querySelectorAll("#visualizer-container div")
    .length;

  // calling the function getArray to get a random array between the range of the length of the current bars
  getArray(lengthOfArray);

  // callig the function to set the heights according to the array values
  displayContentAccordingToTheArray(
    document.querySelectorAll("#visualizer-container div"),
    array
  );
}

// function when slider value is 20
function getBarsForTwenty() {
  // displaying the bars into the dom
  displayBars(26);

  // adding class to the divs to make width perfect
  document.querySelectorAll("#visualizer-container div").forEach((div) => {
    div.style.width = "45px";
  });

  // getting the total length of all the div elements so that the array can be generated
  const lengthOfArray = document.querySelectorAll("#visualizer-container div")
    .length;

  // calling the function getArray to get a random array between the range of the length of the current bars
  getArray(lengthOfArray);

  // callig the function to set the heights according to the array values
  displayContentAccordingToTheArray(
    document.querySelectorAll("#visualizer-container div"),
    array
  );
}

// function when slider value is 20
function getBarsForTen() {
  // displaying the bars into the dom
  displayBars(23);

  // adding class to the divs to make width perfect
  document.querySelectorAll("#visualizer-container div").forEach((div) => {
    div.style.width = "50px";
  });

  // getting the total length of all the div elements so that the array can be generated
  const lengthOfArray = document.querySelectorAll("#visualizer-container div")
    .length;

  // calling the function getArray to get a random array between the range of the length of the current bars
  getArray(lengthOfArray);

  // callig the function to set the heights according to the array values
  displayContentAccordingToTheArray(
    document.querySelectorAll("#visualizer-container div"),
    array
  );
}

// function to get a random array withing the range
function getArray(length) {
  // setting the array to empty so that we can get new array every time
  array = [];

  // storing the random numbers according to the length so that they can be sorted later
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * maxHeight));
  }
}

// function to display initial bars
function displayBars(barsLength) {
  visualizerContainer.innerHTML = ``;
  for (let i = 0; i < barsLength; i++) {
    visualizerContainer.innerHTML += `<div class="bar"></div>`;
  }
}

// function to display the bars according to the generated random heights of each bar
function displayContentAccordingToTheArray(bars, array) {
  // setting the heights from array one by one to every bar
  for (let i = 0; i < array.length; i++) {
    bars[i].style.height = `${array[i]}vh`;
  }
}

// function to get new array from button
function getNewArrayFromButton(barsLength) {
  // setting the array to empty
  array = [];

  // generating new array according to the number of bars
  for (let i = 0; i < barsLength; i++) {
    array.push(Math.floor(Math.random() * maxHeight));
  }

  // setting the default color of bars
  document.querySelectorAll(".bar").forEach((bar) => {
    bar.style.background = "rgb(225, 186, 253)";
  });
}

/*************************************************/
