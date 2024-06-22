const path = './data/members.json';
const cards = document.querySelector('.card-mode');


document.querySelector("#toggle-button").addEventListener("click", () => {
    const data = document.querySelector('#members');
    data.classList.toggle("cards-mode");
    data.classList.toggle("list-mode");

})


const displayCards = (members) => {
    members.forEach((member) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `
        
            <h2>${member.name}</h2>
            <img src="${member.imageURL}" alt="${member.name} image" loading="lazy" height="200" width="">
            <p><strong>${member.membership}</strong></p>
            <p>${member.address}</p>
            <p>${member.address2}</p>
            <p>${member.phone}</p>
            <p>${member.website}</p>
        `
        cards.append(newCard);
        newCard.classList.add("dir-card")

    });
}

async function getMemberData() {
    const response = await fetch(path);

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayCards(data.members)
    }
    else {
        console.log("This does not work.");
    }

}
getMemberData();