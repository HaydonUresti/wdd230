const productsSection = document.getElementById("products-section");
const path = './data/products.json'

const populateProduts = (products) => {
    products.forEach((product) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `
        
            <h2>${product.ProductName}</h2>
            <img src="${product.ProductImageURL}" alt="${product.name} image" loading="lazy" height="200" width="">
            <p>${product.ProductDescription}</p>
            <p><strong>$${product.ProductPrice}</strong></p>
            <button id="order-button">Order Now</button
        `
        productsSection.append(newCard);
        newCard.classList.add("card")
        newCard.classList.add("product-card")


    });
}


async function getProductData() {
    const response = await fetch(path);

    if (response.ok) {
        console.log("got here")
        const data = await response.json();
        populateProduts(data.products);
    }
    else {
        console.log("There is an issue with retrieving the product data.")
    }

}

getProductData();