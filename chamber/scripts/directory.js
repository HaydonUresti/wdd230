const path = './data/members.json';
const cards = document.querySelector('.card-mode');
const membersection = document.getElementById('member-section');

document.querySelector("#toggle-button").addEventListener("click", () => {
    const data = document.querySelector('#members');
    data.classList.toggle("card-mode");
    data.classList.toggle("list-mode");
    membersection.classList.toggle("section-list");

    membersection.classList.toggle("section-card");

})


const displayCards = (members) => {
    members.forEach((member) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `
        
            <h2>${member.name}</h2>
            <img src="${member.imageURL}" alt="${member.name} image" loading="lazy" height="200" width="">
            <p>${member.membership}</p>
            <p>${member.address}<br> ${member.address2}</p>
            
            <p>${member.phone}</p>
            <p><a href="${member.website}">Website</a></'p>
        `
        cards.append(newCard);
        newCard.classList.add("dir-card")

    });
}

async function getMemberData() {
    const response = await fetch(path);

    if (response.ok) {
        const data = await response.json();
        displayCards(data.members)
    }
    else {
        console.log("This does not work.");
    }

}
getMemberData();