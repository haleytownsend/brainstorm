//used in open-weather-map-test

function requestWeather (city, cb) {
  request('http://api.openweathermap.org/data/2.5/weather', {
    qs: {
      q: city,
      units: 'imperial',
      appid: '431f20e3dec4bfcfd571665b88c0f488'
    }
  }, function (err, response, body) {
    if(err) {
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      cb(weather);
      let message = `It's ${weather.main.temp} degrees in ${weather.name}! `;
      console.log(message);
    };
  });
}

module.exports =requestWeather
