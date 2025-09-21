function removeNetflixSansDiv() {
const targetDiv = document.querySelector('div[data-no-focus-lock="true"]');
if (targetDiv) {
    console.log('Removing div:', targetDiv);
    targetDiv.remove();
}
}

removeNetflixSansDiv();
console.log('DOM changed, checked for div.');

const observer = new MutationObserver(() => {
removeNetflixSansDiv();
console.log('DOM changed, checked for div.');
});

observer.observe(document.body, { childList: true, subtree: true });