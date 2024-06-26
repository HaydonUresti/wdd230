const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?lat=43.82013534599511&lon=-111.79350515880046&appid=122acfb6a44abedfe3127b3ee7649f88&units=imperial";
// select HTML elements in the document
const weatherInfo = document.querySelector('#weather-info');
const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('#weather-desc');
const weatherLocation = document.querySelector('#weather-location');


function displayResults(data) {
    let temp = data.main.temp;
    weatherInfo.innerHTML = `${Math.round(temp)}&deg;F - ${data.weather[0].main}`;
    weatherIcon.setAttribute("src", 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png')
    weatherLocation.innerHTML = `${data.name}, ID`;
}

async function apiFetch() {
    try {
        const response = await fetch(WEATHER_URL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
