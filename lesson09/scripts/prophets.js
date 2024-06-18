const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let newSection = document.createElement("section");
        newSection.innerHTML = `
        <section>
                <h2>${prophet.name} ${prophet.lastname}</h2>
                <p>Date of Birth: ${prophet.birthdate}</p>
                <p>Place of Birth: ${prophet.birthplace}</p>
                <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastname} image" loading="lazy" height="400" width="">
                </section>`
        cards.append(newSection);

    });
}

async function getProphetData() {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        displayProphets(data.prophets)
    }
    else {
        console.log("This does not work.");
    }

}



getProphetData();