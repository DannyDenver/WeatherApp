"use strict"
var key = "39556bab6d5e992ec4015b2b038c80c4"; 
searchButton.addEventListener('click', searchWeather);

function searchWeather(){
  var searchCity = city.value;
  loadingText.style.display = "block";
  
  setTimeout(function(){
      if (searchCity.trim().length == 0 ){ 
    alert("please enter a city");
  } 
      var http = new XMLHttpRequest();
      var method= 'GET'; 
      var url = "http://api.openweathermap.org/data/2.5/weather?q=";

      var requestURL= url + searchCity.trim() + "&units=metric&appid=" + key;
      
      http.open(method, requestURL);
      http.onreadystatechange = function(){
        if(http.readyState == XMLHttpRequest.DONE && http.status === 200){
          var data = JSON.parse(http.responseText);
          var weatherData = new Weather(searchCity, data.weather[0].description.toUpperCase());
          weatherData.temperature = data.main.temp;
          console.log(weatherData);
          
          updateWeather(weatherData);
          
          
        }else if(http.readyState === XMLHttpRequest.DONE){
          alert("Something went wrong.")
        }
  }
  http.send();
  loadingText.style.display = "none";
    
  }, 2000);
}
  
function updateWeather(weatherData){
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent= weatherData.description;
  weatherTemperature.textContent = weatherData.temperature

  weatherBox.style.display = "block";
  
  
}











