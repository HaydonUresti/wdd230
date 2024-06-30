let tempSpan = document.getElementById("tempurature");
let windSpan = document.getElementById("wind-speed");
let chillSpan = document.getElementById("windchill");

function showWindChill(temp, wind) {
    if (temp > 50 || wind <= 3) {
        chillSpan.innerText = 'N/A';
        return;
    }


    chillfactor = wind ** 0.16;
    chill = 35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor);
    chillSpan.innerHTML = `${chill.toFixed(0)}&deg;F`;
}


showWindChill(parseInt(tempSpan.innerText), parseInt(windSpan.innerText));
