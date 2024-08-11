document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    if (tab.url === undefined) {
      console.log(tab.url);
    } else if (tab.url.indexOf("file") === 0) {
      console.log("ERROR 2");
    } else {
      const pickerButton = document.createElement("button");
      pickerButton.setAttribute("id", "picker_button");
      pickerButton.innerText = "Select your color";

      const bookmarkbut = document.getElementById("bookmarks");
      pickerButton.addEventListener("click", () => {
        chrome.tabs.sendMessage(tabs[0].id, { from: "picker", query: "color_clicked" });
        window.close();
      });

      bookmarkbut.appendChild(pickerButton);
      loadColors(); // Load saved colors when the popup opens
    }
  });
});

// Load saved colors and display them in the popup
function loadColors() {
  chrome.storage.local.get("color_hex_code", (resp) => {
    const colorCodes = resp.color_hex_code || [];
    const bookmarksContainer = document.getElementById("bookmarks");

    colorCodes.forEach((color) => {
      const colorBox = document.createElement("div");
      colorBox.className = "color-box";
      colorBox.style.backgroundColor = color;
      colorBox.title = color;
      bookmarksContainer.appendChild(colorBox);
    });
  });
}
