var API_BASE_URL ="http://api.openweathermap.org/data/2.5/weather?";

function loadWeatherData () {
  return $.ajax(API_BASE_URL, {
    data: {
      "q": 'KansasCity',
      "appId": '431f20e3dec4bfcfd571665b88c0f488',
      "weather": {
        "main": "Clouds",
        "icon": "04d"
        },
      "main": {
        "temp": 40,
        "pressure": 100
        },
      }
    })
    .then(function (data) {
      console.log(loadWeatherData())
    });
  }

$(document).ready(function() {
  loadWeatherData();
})
