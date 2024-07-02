
33.542638995740425, 9.967410098122043
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?lat=33.542638995740425&lon=9.967410098122043&appid=122acfb6a44abedfe3127b3ee7649f88&units=imperial";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast?lat=33.542638995740425&lon=9.967410098122043&appid=122acfb6a44abedfe3127b3ee7649f88&units=imperial";

// select HTML elements in the document
const weatherInfo = document.querySelector('#tempurature');
const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('#weather-desc');
const weatherLocation = document.querySelector('#weather-location');
const windSpeed = document.querySelector('#wind-speed');



function displayResults(data) {
    let temp = data.main.temp;
    weatherInfo.innerHTML = `${Math.round(temp)}&deg;F - ${data.weather[0].main}`;
    weatherIcon.setAttribute("src", 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png')
    windSpeed.innerHTML = `${Math.round(data.wind.speed)}`;
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

    try {
        const response = await fetch(FORECAST_URL);
        if (response.ok) {
            const forecasts = await response.json();
            showHighLowForecast(forecasts.list); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



const ONE_DAY = 24 * 60 * 60 * 1000
function showHighLowForecast(forecasts) {
    // Get dates for next three days
    let dates = []
    let mydate = new Date();
    for (let i = 0; i < 3; i++) {
        mydate = new Date(mydate.getTime() + ONE_DAY)
        let nextdate = mydate.toISOString().slice(0, 10)
        dates.push(nextdate)
    }
    console.log(dates)

    // Find the object with the highest temperature for each day
    const highTemps = dates.map((date) => forecasts
        .filter(x => x.dt_txt.startsWith(date))
        .reduce((currentObj, highObj) => currentObj.main.temp > highObj.main.temp ? currentObj : highObj)
    )

    // Find the object with the lowest temperature for each day
    const lowTemps = dates.map((date) => forecasts
        .filter(x => x.dt_txt.startsWith(date))
        .reduce((currentObj, lowObj) => currentObj.main.temp < lowObj.main.temp ? currentObj : lowObj)
    )

    // Add the forecast information to the HTML document
    const weatherElt = document.querySelector("#forecast")
    for (let i = 0; i < 3; i++) {
        let date = dates[i].split("-");
        let newsection = document.createElement("section");
        newsection.innerHTML = `<div><h3>${date[1]}-${date[2]}-${date[0]}</h3><p>High: ${highTemps[i].main.temp.toFixed(0)}&deg;F</p><p>Low: ${lowTemps[i].main.temp.toFixed(0)}&deg;</p><div>`
        newsection.classList.add('forecast-data');
        let newIcon = document.createElement("img");
        // It may not be the most correct to jsut get the icon for the hottest part of the day, but I wanted to do so because
        // this site is for Tatooine.
        newIcon.src = 'https://openweathermap.org/img/wn/' + highTemps[i].weather[0].icon + '@2x.png';
        newIcon.classList.add('forecast-image');
        newsection.append(newIcon)
        weatherElt.append(newsection)

    }
}


apiFetch();