const productsSection = document.getElementById("products-section");
const path = './data/products.json'

const populateProduts = (products) => {
    // this value will be passed to the button as the value attribute to give to the Order page.
    let productCounter = 0;

    products.forEach((product) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `
        
            <h2>${product.ProductName}</h2>
            <img src="${product.ProductImageURL}" alt="${product.name} image" loading="lazy" height="200" width="">
            <div id="desc-div">
            <p>${product.ProductDescription}</p>
            <p><strong>$${product.ProductPrice}</strong></p>
            <a href="order.html?ProductIdentifier=${product.ProductIdentifier} aria-label='Link to the Order page'">
            <button id="order-button">Order Now</button
            </a>
            </div>
            `
        productsSection.append(newCard);
        newCard.classList.add("card")
        newCard.classList.add("product-card")
        productCounter += 1;


    });
}


async function getProductData() {
    const response = await fetch(path);

    if (response.ok) {
        const data = await response.json();
        populateProduts(data.products);
    }
    else {
        console.log("There is an issue with retrieving the product data.")
    }

}

getProductData();