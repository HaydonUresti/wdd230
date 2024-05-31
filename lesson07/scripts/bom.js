// In your js file, declare three const variables that hold references to the input, button, and list elements.

const favchap = document.querySelector('#favchap');
const submitbutton = document.querySelector("button");
const mylist = document.getElementById("list");
const CHAPTER_KEY = "chapters";

let chapterList = getChapterListFromStorage();
chapterList.forEach(addItem);


function updateLocalStorage() {
    localStorage.setItem(CHAPTER_KEY, JSON.stringify(chapterList));
}


// Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.

function getChapterListFromStorage() {
    let chapterString = localStorage.getItem(CHAPTER_KEY);

    if (chapterString == null) {
        return [];
    }
    else {
        return JSON.parse(chapterString);
    }
}


function addItem(item) {
    // create a li element
    let newitem = document.createElement("li");
    // create a delete button
    let deletebutton = document.createElement("button");
    // populate the li elements textContent or innerHTML with the input value
    newitem.innerText = item;
    newitem.setAttribute("chapter", item);
    // populate the button textContent with a ❌
    deletebutton.innerText = "❌";
    // append the li element with the delete button
    newitem.append(deletebutton);
    // append the li element to the unordered list in your HTML
    mylist.append(newitem);
    // add an event listener to the delete button that removes the li element when clicked
    deletebutton.addEventListener("click", () => {
        let chapter = newitem.getAttribute("chapter");
        chapterList = chapterList.filter(x => x != chapter);
        updateLocalStorage();
        newitem.remove();
        // send the focus to the input element
        favchap.focus();
    })
}





submitbutton.addEventListener("click", () => {
    // In the click event function block {...}, do the following:
    // check to make sure the input is not blank before doing the following remaining tasks in this list using an if block, otherwise provide a message or at least do nothing and return the .focus() to the input field.

    if (favchap.value == "") {
        favchap.focus();
        return;
    }
    addItem(favchap.value);
    chapterList.push(favchap.value);
    updateLocalStorage();
    // change the input value to nothing or the empty string to clean up the interface for the user
    favchap.value = "";
})

