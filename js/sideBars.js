// getting the extra algos container toggler
const toggler = document.querySelector('#extra-algos-container-toggler');
const algosContainer = document.querySelector('#extra-algos-container');

// listening for hover on toggler
toggler.addEventListener('mouseover', () => {
    algosContainer.style.transform = "translate(0)"; // showing the container
})

// listening for mouseout on toggler
toggler.addEventListener('mouseout', () => {
    algosContainer.style.transform = "translate(-100%)"; // hiding the container
})

// listening for hover on algos container
algosContainer.addEventListener('mouseover', () => {
    algosContainer.style.transform = "translate(0)"; // showing the container
})

// listening for mouseout on hover container
algosContainer.addEventListener('mouseout', () => {
    algosContainer.style.transform = "translate(-100%)"; // showing the container
})
