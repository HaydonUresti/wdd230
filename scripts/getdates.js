// Set the last modified date in the footer
document.querySelector("#lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

// Set the copyright date in the footer
document.querySelector('#currentYear').innerHTML = `©${new Date().getFullYear()} <br> Haydon Uresti <br> Idaho `;