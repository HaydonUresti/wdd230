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
        document.documentElement.style.setProperty('--text-color', 'white');
        // document.documentElement.style.setProperty('--inv-text-color', 'black');
        document.documentElement.style.setProperty('--body-color', '#1f1f1d');
        document.documentElement.style.setProperty('--card-color', '#588157');
        document.documentElement.style.setProperty('--header-color', '#3A5A40');
        document.documentElement.style.setProperty('--nav-color', '#1e2f21');
    }
    else {
        document.documentElement.style.setProperty('--text-color', 'black');
        // document.documentElement.style.setProperty('--inv-text-color', 'white');
        document.documentElement.style.setProperty('--body-color', '#DAD7CD');
        document.documentElement.style.setProperty('--card-color', '#A3B18A');
        document.documentElement.style.setProperty('--header-color', '#588157');
        document.documentElement.style.setProperty('--nav-color', '#3A5A40');
    }

})