var WEATHER_DATA = {
  "currentWeather" : [
    {
      "id": 88319,
      "dt":1345284000,
      "name":"Benghazi",
      "main": {
        "temp": 306.15,
        "pressure": 1013,
        "humidity": 44
    },
      "weather": [
        {
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ]
    };
  ]
}

function getCurrentWeather(callbackFn) {
  setTimeout(function() {callBackFn(WEATHER_DATA)}, 1);
}

function displayCurrentWeather(data) {
    for (index in data.currentWeather) {
       $('body').append(
        '<p>' + data.currentWeather[index].text + '</p>');
    }
}

function getAndDisplayCurrentWeather() {
    getRecentCurrentWeather(displayCurrentWeather);
}

$(function() {
    getAndDisplayCurrentWeather();
})
