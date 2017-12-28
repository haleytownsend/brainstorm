var currentCity = 'Kansas City'

//load sign in page
$(function signInPage(){
  $('.login').show();
  $('.row-one').show();
  $('.row-two').hide();
  $('.row-three').hide();
  $('.row-four').hide()
})

//move to home page when submit button is clicked.
$('.submit').on("click", function(event) {
    event.preventDefault();
    $('.section').show();
    $(".log-in").hide();
    getNewWeather(currentCity);
  })

//run both functions to GET from owm API suing 'currentCity'
function getNewWeather(currentCity){
  //GET current weather from owm API
  owm.getWeather({
    city: currentCity
  })
    .catch(err => {
      console.error('Something went wrong while requesting weather data:', error);
    })
    .then(payload => {
      var convertedPressure = payload.main.pressure / 33.8639;
      var decPressure = convertedPressure.toFixed(2);
      $('#temperature').html(payload.main.temp + '°F');
      $('#weather-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.weather[0].icon + '.png">');
      $('#pressure').html(decPressure);
      $('#humidity').html(payload.main.humidity + '%');
    })
  //GET forecast weather from owm API
  owm.getForecast({
    city: currentCity
  })
    .catch(err=> {
      console.error('Something went wrong while requesting weather forecast', error);
    })
    .then(payload => {
      console.log(payload);
      $('#day1').html(payload.list["0"].dt_txt);
      $('#day1-temp').html(payload.list["0"].main.temp + '°');
      $('#day1-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.list["0"].weather["0"].icon + '.png">');
      $('#day2').html(payload.list["8"].dt_txt);
      $('#day2-temp').html(payload.list["8"].main.temp + '°');
      $('#day2-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.list["8"].weather["0"].icon + '.png">');
      $('#day3').html(payload.list["16"].dt_txt);
      $('#day3-temp').html(payload.list["16"].main.temp + '°');
      $('#day3-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.list["16"].weather["0"].icon + '.png">');
      $('#day4').html(payload.list["24"].dt_txt);
      $('#day4-temp').html(payload.list["24"].main.temp + '°');
      $('#day4-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.list["24"].weather["0"].icon + '.png">');
      $('#day5').html(payload.list["32"].dt_txt);
      $('#day5-temp').html(payload.list["32"].main.temp + '°');
      $('#day5-icon').html('<img src="http://openweathermap.org/img/w/'+ payload.list["32"].weather["0"].icon + '.png">');
    })
}

//load new city
$('#city_btn').on("click", function(event) {
    event.preventDefault();
    var searchCity = $('#search-city').val();
    var currentCity = searchCity;
    $('#city').html(currentCity);
    getNewWeather(currentCity)
  })

//slider bar
$(function() {
  $('#slider').slider({
    value:5,
    min: 0,
    max: 10,
    step: 1,
    slide: function(ev, ui) {
      $('#migraine-level').html( ui.value );
    }
  });
});

var $waterButtons = $('button.water')

$waterButtons.click(ev => {
  $waterButtons.removeClass('active')
  $(ev.target).addClass('active')
})

//migraine log
    var triggers = []
    $('.trigger:checked').each((index, el) => triggers.push($(el).attr('value')))

    var intensity= $('#migraine-level');
    var water= $('.water.active').html();
    var journal = $('#journal').val();
    console.log(intensity, triggers, water, journal);

    jQuery.ajax('/logs', {
      data: {
        intensity: intensity,
        water: water,
        journal: journal,
        triggers: triggers
      }
    })
  })

  $('#submit-btn').on('click', function(event) {
      console.log($('#migraine-level').val());
      event.preventDefault();

//log in page
  //set up form verification
  //API to keep users data and check log in data against

//Line chart
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

//Bar chart
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
