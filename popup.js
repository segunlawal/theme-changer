const button = document.getElementById("toggle-btn");
const checkbox = document.querySelector('input[type="checkbox"]');

if (document.querySelector(".popup")) {
  // retrieve the value of the checkbox from localStorage
  const checkboxValue = localStorage.getItem("checkboxValue");
  if (checkboxValue) {
    checkbox.checked = JSON.parse(checkboxValue);
  }

  button.addEventListener("click", toggleButton);
}

function toggleButton() {
  checkbox.checked = !checkbox.checked;

  // store the value of the checkbox in localStorage
  localStorage.setItem("checkboxValue", JSON.stringify(checkbox.checked));

  const fileName = !checkbox.checked ? "oppTheme.js" : "currentTheme.js";
  chrome.tabs.query({ active: true }, function (tabs) {
    let tab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: [fileName],
    });
  });
}
