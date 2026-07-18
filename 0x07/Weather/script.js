const weather = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const abujaUrl = "https://api.open-meteo.com/v1/forecast?latitude=9.0579&longitude=7.4951&daily=temperature_2m_max,temperature_2m_min,weathercode,sunrise,rain_sum&timezone=Africa%2FLagos";
const data = await weather(abujaUrl);

if (data) {
    const weatherContainer = document.getElementById("weather");
    let cards = "";

    for (let i = 0; i < 7; i++) {
        let code = data.daily.weathercode[i];
        let condition = "";

        if (code === 0) {
            condition = " Sunny";
        } else if (code <= 3) {
            condition = " Cloudy";
        } else if (code >= 51 && code <= 65) {
            condition = " Rain";
        } else {
            condition = " Mixed weather";
        }

        let rainAmount = data.daily.rain_sum[i];
        let rainText = "";

        if (rainAmount === 0) {
            rainText = "No Rain Expected";
        } else if (rainAmount > 0 && rainAmount <= 2) {
            rainText = "Light Showers";
        } else if (rainAmount > 2 && rainAmount <= 10) {
            rainText = "Moderate Rain";
        } else {
            rainText = "Heavy Downpour";
        }

        cards += `
            <div class="weather-card">
                <h2>${new Date(data.daily.time[i]).toDateString()}</h2>
                <h1>${condition}</h1>
                <p>Max: ${data.daily.temperature_2m_max[i]}°C</p>
                <p>Min: ${data.daily.temperature_2m_min[i]}°C</p>
                <p><strong>Rainfall:</strong> ${rainText}</p>
                <p>Sunrise: ${data.daily.sunrise[i].split("T")[1]}</p>
            </div>
        `;
    }
    
    weatherContainer.innerHTML = cards;
} else {
    document.getElementById("weather").innerHTML = "Failed to load weather";
}