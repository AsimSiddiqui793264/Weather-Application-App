let searchBtn = document.querySelector(".searchBtn");
let inputCity = document.querySelector(".inputCity");
let image = document.querySelector(".image");
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");
let humidity = document.getElementById("humidity");
let windspeed = document.getElementById("wind-speed");
let LocationNotFound = document.querySelector(".Location-not-found");
let weatherBody = document.querySelector(".weather-body");

 async function checkWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae51a4bb2c418a197081a41663fa3103`
    const weatherData = await fetch(`${url}`).then(response => response.json());
    // console.log(weatherData);
    
    if(weatherData.cod === "404"){
        console.log("error");
        LocationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        return;
    }
    
    
    LocationNotFound.style.display = "none";
    weatherBody.style.display = "flex";
    temperature.innerHTML = `${Math.floor(weatherData.main.temp - 273.15)}\u00B0C`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windspeed.innerHTML = `${weatherData.wind.speed}km/h`;

    switch (weatherData.weather[0].main){
        case "Clouds":
            image.src = "cloud.png";
            break;
        case "Rain":
            image.src = "rain.png";
            break;
        case "Clear":
            image.src = "clear.png";
            break;
        case "Mist":
            image.src = "mist.png";
            break;
        case "Snow":
            image.src = "snow.png";
            break;

    }
}

searchBtn.addEventListener("click" , () =>{
    checkWeather(inputCity.value);
});


