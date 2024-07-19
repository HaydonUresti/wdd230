// let url = new URL(window.location);
// let itemNum = url.searchParams;


// console.log(itemNum[0]);

let url = new URL(window.location);
let params = url.searchParams;
const productsSection = document.getElementById("product-section");

const path = './data/products.json'


// Remove this when you are done inspecting parameters in the console
for (const p of params) {
    var itemNum = p;
}



const populateOrder = (product) => {
    // this value will be passed to the button as the value attribute to give to the Order page.
    let productCounter = 0;
    let newCard = document.createElement("div");
    newCard.innerHTML = `
        
        <h2>${product.ProductName}</h2>
        <img src="${product.ProductImageURL}" alt="${product.name} image" loading="lazy" height="200" width="">
        <p>${product.ProductDescription}</p>
        <p><strong>$${product.ProductPrice}</strong></p>
        </a>
        `
    productsSection.append(newCard);
    newCard.classList.add("card")
    newCard.classList.add("product-card")
}


async function getProductData() {
    const response = await fetch(path);

    if (response.ok) {
        const data = await response.json();
        populateOrder(data.products[itemNum[1]]);
    }
    else {
        console.log("There is an issue with retrieving the product data.")
    }

}

getProductData();
