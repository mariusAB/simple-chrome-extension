(function () {
    'use strict';

    function removeNetflixSansDiv() {
        const targetDiv = document.querySelector('div[data-no-focus-lock="true"]');
        if (targetDiv) {
            console.log('Removing Netflix popup div:', targetDiv);
            targetDiv.remove();
        }
    }

    function removeBtSoftwallDivs() {
        const softwallDivs = document.querySelectorAll('#bt-softwall, .bt-softwall');
        softwallDivs.forEach(div => {
            console.log('Removing bt-softwall div:', div);
            div.remove();
        });
    }

    function clickTargetButtons() {
        const selectors = [
            'button.ScCoreButton-sc-ocjdkq-0.dUmPtj'
        ];

        selectors.forEach(selector => {
            const button = document.querySelector(selector);
            if (button) {
                button.click();
                console.log('Clicked button:', button);
            }
        });
    }

    function handleDomChanges() {
        removeNetflixSansDiv();
        removeBtSoftwallDivs();
        clickTargetButtons();
    }

    function startObserver() {
        if (!document.body) {
            return;
        }

        const observer = new MutationObserver(() => {
            handleDomChanges();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        handleDomChanges();

        console.log('MutationObserver started.');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startObserver);
    } else {
        startObserver();
    }

})();