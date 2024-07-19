
const productsSection = document.getElementById("product-card");
let url = new URL(window.location);
let params = url.searchParams;
const path = './data/products.json'
let SKU = params.get("SKU")

// Remove this when you are done inspecting parameters in the console

// Add the URL values

// function populateOrderInfo() {

// }

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// function addSKU(SKU) {
//     const hiddenField = document.getElementById("SKU");
//     hiddenField.setAttribute("value", SKU)

// }

function getDeliveryDate() {
    const DAY = 86400000;
    const TODAY = new Date().getTime() + DAY * 5;
    const deliveryDate = new Date(TODAY)
    return deliveryDate.toDateString();

}

const populateOrder = (product) => {
    // console.log(product)

    document.getElementById("order-num").innerText = `${getRandomIntInclusive(100, 999)}-${getRandomIntInclusive(79000, 110000)}`;
    document.getElementById("total").innerText = (product.ProductPrice + (product.ProductPrice * .05)).toFixed(2)
    document.getElementById("name").innerText = `${params.get("first-name")} ${params.get("last-name")}`;
    document.getElementById("address").innerText = `${params.get("address")} ${params.get("city")}, ${params.get("state")} ${params.get("zip-code")}`;
    document.getElementById("delivery").innerText = getDeliveryDate();

    let newCard = document.createElement("div");
    newCard.innerHTML = `
        
        <h2>${product.ProductName}</h2>
        <p>${product.ProductIdentifier}</p>
        <img src="${product.ProductImageURL}" alt="${product.name} image" loading="lazy" height="200" width="">
        <p>${product.ProductDescription}</p>
        <div id="cost-div">
        <p><strong>$${product.ProductPrice}</strong></p>
        </div>
        `
    productsSection.append(newCard);
    newCard.classList.add("card")
    newCard.classList.add("product-card")
    getDeliveryDate()
    // addSKU(product.ProductIdentifier)
    // populateOrderInfo()
}


async function getProductData() {
    const response = await fetch(path);

    if (response.ok) {
        const data = await response.json();
        console.log(SKU)
        populateOrder(data.products.find(product => product.ProductIdentifier === SKU));
    }
    else {
        console.log("There is an issue with retrieving the product data.")
    }

}

getProductData();
