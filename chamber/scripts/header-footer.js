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

// Theme button
let darkbutton = document.getElementById("theme-button");
darkbutton.addEventListener("click", () => {
    darkbutton.classList.toggle("dark")
    if (darkbutton.classList.contains("dark")) {
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--body-color', 'white');
        document.documentElement.style.setProperty('--card-color', '#db995a');
        document.documentElement.style.setProperty('--border-color', '#82A0BC');
        document.documentElement.style.setProperty('--header-color', '#828E9B');
        document.documentElement.style.setProperty('--link-highlight-color', 'azure');
    }

    else {
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--body-color', 'black');
        document.documentElement.style.setProperty('--card-color', '#9e6a3a');
        document.documentElement.style.setProperty('--border-color', '#526476');
        document.documentElement.style.setProperty('--header-color', '#4c5a69');
        document.documentElement.style.setProperty('--link-highlight-color', 'black');
    }

})