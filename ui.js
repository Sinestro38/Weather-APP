class UI {
    // Display weather
    displayWeather(data) {
        document.getElementById('w-location').innerHTML = data.name;
        document.getElementById('w-desc').innerHTML = data.weather[0].description;
        document.getElementById('w-string').innerHTML = `${data.main.temp} °C`;
        document.getElementById('w-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById('w-humidity').innerHTML = `Relative humidity: ${data.main.humidity}`;
        document.getElementById('w-direction').innerHTML = `Wind Direction: ${data.wind.deg}`;
        document.getElementById('w-wind').innerHTML = `Wind speed: ${data.wind.speed} km/h`;       
    }
}
