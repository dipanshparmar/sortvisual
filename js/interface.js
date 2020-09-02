/*********************Variables********************/

// getting no. of bars present
const noOfBars = document.querySelectorAll(".bar").length;

// getting the main container
const visualizerContainer = document.querySelector("#visualizer-container");

// getting the size controller
const sizeController = document.querySelector("#size-control");

// heights for the bars
const maxHeight = "88";

// main array to display on the screen
let array = [];

/***************************************************/

/********************Function Calls*********************/

// for default screen when first time screen opens or reloads
getBarsForFifty();

/****************************************************/

/**********************Event listeners***************/

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

// function when slider value is 100
function getBarsForHundred() {
  // displaying the text onto the dom
  visualizerContainer.innerHTML = `<div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>`;

  // adding class to the divs to make width perfect
  document.querySelectorAll("#visualizer-container div").forEach((div) => {
    div.style.width = "5px";
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
  // displaying the text onto the dom
  visualizerContainer.innerHTML = `<div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>`;

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
  // displaying the text onto the dom
  visualizerContainer.innerHTML = `<div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>`;

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
  // displaying the text onto the dom
  visualizerContainer.innerHTML = `<div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>`;

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
  // displaying the text onto the dom
  visualizerContainer.innerHTML = `<div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>`;

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
  // displaying the text onto the dom
  visualizerContainer.innerHTML = `<div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>`;

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
  // displaying the text onto the dom
  visualizerContainer.innerHTML = `<div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>`;

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
  // displaying the text onto the dom
  visualizerContainer.innerHTML = `<div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>`;

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
  // displaying the text onto the dom
  visualizerContainer.innerHTML = `<div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>`;

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
  // displaying the text onto the dom
  visualizerContainer.innerHTML = `<div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>`;

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
}

/*************************************************/
