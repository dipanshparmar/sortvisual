// adding some extra stuff here
const logoText = document.querySelector('.logo-text');

// when there is a click on logo, then reload the page
logoText.addEventListener('click', () => {
    window.location.reload();
})

// function to add complexities
function addComplexities(bestCaseTimeComplexity, worstCastTimeComplexity, averageCaseTimeComplexity, spaceComplexity, stability) {
    const bctc = document.querySelector('.bctc');
    const wctc = document.querySelector('.wctc');
    const actc = document.querySelector('.actc');
    const sc = document.querySelector('.sc');
    const sb = document.querySelector('.stability');

    bctc.textContent = bestCaseTimeComplexity;
    wctc.textContent = worstCastTimeComplexity;
    actc.textContent = averageCaseTimeComplexity;
    sc.textContent = spaceComplexity;
    sb.textContent = stability;
}

// function to remove complexities
function removeComplexities() {
    const bctc = document.querySelector('.bctc');
    const wctc = document.querySelector('.wctc');
    const actc = document.querySelector('.actc');
    const sc = document.querySelector('.sc');
    const sb = document.querySelector('.stability');

    bctc.textContent = '?';
    wctc.textContent = '?';
    actc.textContent = '?'
    sc.textContent = '?';
    sb.textContent = '?';
}

// displaying the options on click on the hamburger and hiding them on another click
let isOptionsOpen = false; // this will help to make decisions
document.querySelector('#hamburger img').addEventListener('click', () => {
    // getting the options
    const options = document.querySelector('#options');

    if (isOptionsOpen) {
        // hide the options if already open
        options.style.display = 'none';
    } else {
        // otherwise show the options and set isOptionsOpen to true
        options.style.display = 'flex';
    }

    // changing the value of isOptionsOpen
    isOptionsOpen = !isOptionsOpen;
})

// display the controls on click on the hamburger and hiding them on another click
let isControlsOpen = false;
document.querySelector('#controls-hamburger img').addEventListener('click', () => {
    // getting the controls
    const controls = document.querySelector('#controls');

    if(isControlsOpen) {
        controls.style.display = 'none';
    } else {
        controls.style.display = 'flex';
    }

    // updating the value
    isControlsOpen = !isControlsOpen;
})

export { addComplexities, removeComplexities };