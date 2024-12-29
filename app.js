function CheckAllWheather() {
    let userInput1 = document.getElementById("input1").value;

    let body = document.getElementById("body");

    console.log("user input:", userInput1);

    axios.get(`https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${userInput1}`)
        .then(function (response) {
            let weatherData = response.data;
            console.log("weather Data Responce:", weatherData);
            document.getElementById("weatherData1").innerHTML = `<h2>Weather in ${weatherData.location.name}/${weatherData.location.country} <img src ="https:${weatherData.current.condition.icon}" alt="Weather Icon"></h2>`;
            document.getElementById("weatherData2").innerHTML = `
        <h3>Temperature: ${weatherData.current.temp_c}°C</h3>
        <h3> Condition: ${weatherData.current.condition.text}</h3>
         <h3> LocalTime: ${weatherData.location.localtime}</h3>
        `;
            document.getElementById("weatherData3").innerHTML = `
        <h3>Feels Like: ${weatherData.current.feelslike_c}°C</h3>
        <h3>Humidity: ${weatherData.current.humidity}</h3>
         <h3>Wind: ${weatherData.current.wind_kph}</h3>
        `;
        
            // document.getElementById("weatherData4").innerHTML = `
            // // <h3>${}</h3>
            // `;

            let ConditionValue = weatherData.current.condition.text.toLowerCase();
            console.log("ConditionValue", ConditionValue);

            const weatherConditions = {
                "clear": "Clear_weather.jpg",
                "partly cloudy": "33817107-partly-cloudy-sky-with-rain-storm.jpg",
                "partly sunny": "sunshine-sunny-blue-skies-partly-cloudy-no-rain-weather-forecast-stock-photos-2B95E7X.jpg",
                "overcast": "GettyImages-528903279-599d1549aad52b001107054d.jpg",
                "sunny": "images.jpg",
                "mist": "foggy-morning-in-a-meadow.jpg",
                "fog": "premium_photo-1673081112888-f877c594ad18.jpg",
                "rain": "premium_photo-1725408051956-a6dc142169bd.jpg",
                "showers": "rain-storm.jpg",
                "thunderstorms": "thunderstorm-5best_35432948_ver1.0.webp",
                "snow": "koryaksky-volcano-2790656_1280.jpg",
                "Freezing drizzle": "be94f27f-c70a-4e6c-b3cc-9a448da929b8-large16x9_SnowfallsinEllicottCityVeronicaJohnson.JPG"
            };

            // let imageUrl =  weatherConditions[ConditionValue] || 'pexels-fotios-photos-1107717.jpg';

            // body.style.backgroundImage = `url('${imageUrl}')`;
            let imageUrl = weatherConditions[ConditionValue] || 'pexels-fotios-photos-1107717.jpg';
            body.style.backgroundImage = `url('${imageUrl}')`;
            body.style.backgroundSize = "cover";    // Ensures the image covers the whole screen
            body.style.backgroundPosition = "center"; // Centers the image
            body.style.backgroundRepeat = "no-repeat"; // Prevents image from repeating
        })
        .catch(function (error) {
            console.log("Error fetching weather data:", error);
            // document.getElementById("weatherData1").innerHTML = `<p>Error: ${err.message}</p>`;

        })
}