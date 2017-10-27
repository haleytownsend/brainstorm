
const request = require('request');
const argv = require('yargs').argv;

//let apiKey = '431f20e3dec4bfcfd571665b88c0f488';
//let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=431f20e3dec4bfcfd571665b88c0f488`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    //let message = `It's ${weather.main.temp} degrees in ${weather.name}! `;
    console.log(weather);
    //$('#current-temp').html(message)
  }
});
