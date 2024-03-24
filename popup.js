const addNewBookmark = () => {};

const viewBookmarks = () => {};

const onDelete = e => {};

const setBookmarkAttributes =  () => {};

document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true}, tabs =>{
    const tab = tabs[0]
    if (tab.url === undefined){
        console.log(tab.url)
    } else if (tab.url.indexOf('file') === 0) {
        console.log("ERROR 2")
    } else{
        const pickerButton = document.createElement("button")
        pickerButton.setAttribute("id", "picker_button")
        pickerButton.innerText = "Select your color"
        const bookmarkbut = document.getElementById("bookmarks")
        pickerButton.addEventListener("click", () => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from : "picker", query: "color_clicked"}
            );
            window.close()
        })
        bookmarkbut.appendChild(pickerButton)
        console.log("picker button clicked")
    }
})
});


// styles.css

// /* Popup container */
// #popup-container {
//     width: auto; /* Set width to auto */
//     height: auto; /* Allow height to adjust based on content */
//     max-width: 100%; /* Maximum width */
//     padding: 2em; /* Padding */
//     background-color: #ffffff; /* White background */
//     border: 3px solid #001f3f; /* Navy bluish border */
//     border-radius: 10px; /* Rounded edges */
//     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Shadow effect */
// }

// /* Title */
// #popup-container > h1 {
//     margin-top: 0; /* Remove default margin */
//     padding: 0.5em 0; /* Add padding above and below */
//     align-self: center; /* Center the text horizontally */
//     font-family: "Syne Mono", monospace; /* Apply Syne Mono font */
//     font-weight: 400; /* Font weight */
//     font-style: normal; /* Font style */
// }

// /* Hover effect for the popup container */
// #popup-container:hover {
//     background-color: black;
//     color: white;
// }

// /* Pick Color Button */
// #pickColorButton {
//     padding: 8px 12px; /* Adjust padding for better clickability */
//     border: none; /* Remove border */
//     background-color: #001f3f; /* Set background color */
//     color: white; /* Set text color */
//     font-size: 16px; /* Set font size */
//     border-radius: 5px; /* Apply border radius */
//     cursor: pointer; /* Change cursor to pointer */
//     transition: background-color 0.3s, color 0.3s; /* Apply transition to background-color and text color */
// }

// /* Hover effect for the pick color button */
// #pickColorButton:hover {
//     background-color: #002855; /* Darken background color on hover */
// }

// /* Color List */
// #colorList {
//     list-style-type: none; /* Remove bullet points */
//     padding: 0; /* Remove default padding */
// }

// /* Color List Item */
// #colorList li {
//     margin-bottom: 0.5em; /* Add space between color items */
//     font-size: 14px; /* Adjust font size */
// }

// /* Close Button */
// #closeButton {
//     padding: 8px 12px; /* Adjust padding for better clickability */
//     border: none; /* Remove border */
//     background-color: #ff5733; /* Set background color */
//     color: white; /* Set text color */
//     font-size: 16px; /* Set font size */
//     border-radius: 5px; /* Apply border radius */
//     cursor: pointer; /* Change cursor to pointer */
// }

// /* Hover effect for the close button */
// #closeButton:hover {
//     background-color: #e64a2e; /* Darken background color on hover */
// }
