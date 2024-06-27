function showCurrentTimeForecast(forecasts) {
    const weatherElt = document.querySelector("body section")
    const timenow = forecasts[0].dt_txt.slice(11, 19);

    let temps = forecasts.filter(x => x.dt_txt.indexOf(timenow) != -1)

    for (let i = 1; i < 3; i++) {
        let newsection = document.createElement("section");
        let mydate = temps[i].dt_txt.slice(0, 10);

        newsection.innerHTML = `<h2>${mydate}</h2><p>${temps[i].main.temp}&deg;F @ ${timenow}</p>`;
        weatherElt.append();
    }
}