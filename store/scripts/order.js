let url = new URL(window.location);
let params = url.searchParams;
const productsSection = document.getElementById("product-section");
const path = './data/products.json';



for (const p of params) {
    var SKU = p;
}






function addSKU(SKU) {
    const hiddenField = document.getElementById("SKU");
    hiddenField.setAttribute("value", SKU)

}

const populateOrder = (product) => {
    let newCard = document.createElement("div");
    newCard.innerHTML = `
        
        <h2>${product.ProductName}</h2>
        <img src="${product.ProductImageURL}" alt="${product.name} image" loading="lazy" height="200" width="">
        <p>${product.ProductDescription}</p>
        <div id="cost-div">
        <p>Subtotal: $${product.ProductPrice}</p>
        <p>Sales Tax: 5%</p>
        <p><strong>Total: $${(product.ProductPrice + (product.ProductPrice * .05)).toFixed(2)}</strong></p>
        </div>
        `
    productsSection.append(newCard);
    newCard.classList.add("card")
    newCard.classList.add("product-card")
    addSKU(product.ProductIdentifier)
}


async function getProductData() {
    const response = await fetch(path);

    if (response.ok) {
        const data = await response.json();
        populateOrder(data.products.find(product => product.ProductIdentifier === SKU[1]));
    }
    else {
        console.log("There is an issue with retrieving the product data.")
    }

}

getProductData();


