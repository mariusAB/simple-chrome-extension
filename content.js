document.body.style.backgroundColor = "blue";

function removeDivByName(name) {
  const divs = document.querySelectorAll("div");
  divs.forEach(div => {
    if (div.getAttribute("name") === name) {
      div.remove();
      console.log(`Removed popup`);
    }
  });
}

removeDivByName("netflix-sans-font-loaded");

const observer = new MutationObserver(() => {
  removeDivByName("netflix-sans-font-loaded");
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});