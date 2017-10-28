// var API_BASE_URL ="http://api.openweathermap.org/data/2.5/weather?";
//
// function loadWeatherData () {
//   return $.ajax(API_BASE_URL, {
//     data: {
//       "q": 'KansasCity',
//       "appId": '431f20e3dec4bfcfd571665b88c0f488',
//       "weather": {
//         "main": "Clouds",
//         "icon": "04d"
//         },
//       "main": {
//         "temp": 40,
//         "pressure": 100
//         },
//       }
//     })
//     .then(function (data) {
//       console.log(loadWeatherData())
//     });
//   }
//
// $(document).ready(function() {
//   loadWeatherData();


var callOWM = function() {
  const request = require('request');
  const argv = require('yargs').argv;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=431f20e3dec4bfcfd571665b88c0f488`;
  request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      //let message = `It's ${weather.main.temp} degrees in ${weather.name}! `;
      console.log(weather);
    };
  });
}



var ctx = document.getElementById("myLineChart");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:["Sunny", "Rain", "Wind", "Storms", "Swing in Bar Pressure", "Swing in Temp"],
        datasets: [{
          label: '# of migraines',
          data: [3, 4, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Stress", "Sleep", "Hormones", "Food", "Alcohol", "Physical activity"],
        datasets: [{
            label: '# of Migraines',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(200, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx = document.getElementById("myRadarChart");
var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["Sunny", "Rain", "Wind", "Storms", "Swing in Bar Pressure", "Swing in Temp"],
    datasets: [{
      label: 'Intensity of pain',
      data: [4, 1, 8, 3, 2, 7],
      backgroundColor: 'rgba(255, 159, 64, .4)',
    },
    {
      label: 'cups of water',
      data: [1, 2, 8, 4, 6, 7],
      backgroundColor: 'rgba(75, 192, 192, .4)',
    },
    {
      label: '# of migraines',
      data: [3, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(153, 162, 64, .4)',
    },
  ]},
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});


//
//
// var ctx = document.getElementById("myMixedChart");
// var myMixedChart = new Chart(ctx, {
//     type: 'bar',
//     data:
//       datasets: [{
//         label: "Intensity bar",
//         data: [12, 19, 3, 5, 2, 3],
//       },
//       {
//         label: '# of migraines line',
//         data: [3, 4, 3, 5, 2, 3],
//         type: "line"
//       }],
//     labels: ["Sunny", "Rain", "Wind", "Storms", "Swing in Bar Pressure", "Swing in Temp"],
//         //   backgroundColor: [
//         //         'rgba(200, 99, 132, 0.2)',
//         //         'rgba(54, 162, 235, 0.2)',
//         //         'rgba(255, 206, 86, 0.2)',
//         //         'rgba(75, 192, 192, 0.2)',
//         //         'rgba(153, 102, 255, 0.2)',
//         //         'rgba(255, 159, 64, 0.2)'
//         //   ],
//         //   borderColor: [
//         //         'rgba(255,99,132,1)',
//         //         'rgba(54, 162, 235, 1)',
//         //         'rgba(255, 206, 86, 1)',
//         //         'rgba(75, 192, 192, 1)',
//         //         'rgba(153, 102, 255, 1)',
//         //         'rgba(255, 159, 64, 1)'
//         //   ],
//         //   borderWidth: 1
//         // }],
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {beginAtZero:true}
//         }]
//       }
//     }
//   })
