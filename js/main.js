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

export { addComplexities, removeComplexities };