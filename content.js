function removeNetflixSansDiv() {
    const targetDiv = document.querySelector('div[data-no-focus-lock="true"]');
    if (targetDiv) {
        console.log('Removing Netflix popup div:', targetDiv);
        targetDiv.remove();
    }
}

function removeBtSoftwallDivs() {
    const tarkovDivs = document.querySelectorAll('[id="bt-softwall"], .bt-softwall');
    tarkovDivs.forEach(div => {
        console.log('Removing bt-softwall div:', div);
        div.remove();
    });
}

function runRemovals() {
    removeNetflixSansDiv();
    removeBtSoftwallDivs();
    console.log('DOM changed, checked for target divs.');
}

runRemovals();

const observer = new MutationObserver(() => {
    runRemovals();
});

observer.observe(document.body, { childList: true, subtree: true });