// Last updated and date info
// Set the copyright date in the footer
document.querySelector('#currentYear').innerHTML = `${new Date().getFullYear()}`;
// Set the last modified date in the footer
document.querySelector("#lastModified").innerHTML = `Last Modified: ${document.lastModified}`;


// The hamburger menu
let menu_button = document.getElementById("menu-button");
let navlist = document.querySelector("nav ul");
menu_button.addEventListener('click', () => {
    menu_button.classList.toggle("open")
    navlist.classList.toggle("open")
})