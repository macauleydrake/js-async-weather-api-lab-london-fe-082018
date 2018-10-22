const API_KEY = "dcfc24250b92fa00d2557a5c51147534"

function handleFormSubmit(event) {
  //handle submit event
  event.preventDefault();
  let city = event["target"][0]["value"]
  console.log(city)
  fetchCurrentWeather(city)
  fetchFiveDayForecast(city)
  
}

function fetchCurrentWeather(city) {
  let url = "https://api.openweathermap.org/data/2.5/weather?APPID=" + API_KEY + "&q=" + city  
  fetch(url).then(response => response.json()).then(json => displayCurrentWeather(json))
}

function displayCurrentWeather(json) {
  console.log("I'm in displayCurrentWeather")
  console.log(json)
  console.log(json["main"]["temp"])
  temp.innerHTML = (json["main"]["temp"]);
  humidity.innerHTML = (json["main"]["humidity"]);
  high.innerHTML = (json["main"]["temp_max"]);
  low.innerHTML = (json["main"]["temp_min"]);
  cloudCover.innerHTML = (json["clouds"]["all"]);
  
  
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  let url = "https://api.openweathermap.org/data/2.5/forecast?APPID=" + API_KEY + "&q=" + city  
  fetch(url).then(response => response.json()).then(json => displayFiveDayForecast(json))
  
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  console.log(json['list'][7])
  
  let aside = document.querySelector('aside')

  
  
  for (let index = 0; index< 39; index++){
    let div = document.createElement('div')
    div.innerHTML = json['list'][index]['dt_txt'] + " Temperature " + json['list'][index]['main']['temp'] + " Humidity: " + json['list'][index]['main']['humidity']
    aside.appendChild(div);
  
  }
  
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  const submit = document.getElementById('cityForm')
  submit.addEventListener("submit", (e)=>handleFormSubmit(e))
  //add event listener here for form submission
})
