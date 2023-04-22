const button = document.getElementById("toggle-btn");
const checkbox = document.querySelector('input[type="checkbox"]');

if (document.querySelector(".popup")) {
  button.addEventListener("click", toggleButton);
}

function toggleButton() {
  checkbox.checked ? !checkbox.checked : checkbox.checked;

  const fileName = !checkbox.checked ? "oppTheme.js" : "currentTheme.js";
  chrome.tabs.query({ active: true }, function (tabs) {
    let tab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: [fileName],
    });
  });
}
