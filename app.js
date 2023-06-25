let apiKey = "5fd4656a7a6fc469d70be19b8a2b9633";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    
    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png";
    }
}




searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

checkWeather();