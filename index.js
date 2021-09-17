let button = document.querySelector(".button");
let input = document.querySelector(".search-bar");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

button.addEventListener("click", function () {
  console.log("ssssssss");
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=99d3a08c98475f71c80280110324894c"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let name = data["name"];
      let tempValue = data["main"]["temp"];
      let humidityValue = data["main"]["humidity"];
      let speed = data["wind"]["speed"];
      city.innerHTML = "Weather in " + name;
      temp.innerHTML = "Temperature:" + tempValue + "°F";
      humidity.innerHTML = "Humidity: " + humidityValue + "%";
      wind.innerHTML = "Windspeed: " + speed + " km/h";
    });
});
