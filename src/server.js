var express = require('express');
var app = express();
app.use(express.static('public'));
const server = app.listen(process.env.PORT || 8080);

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

function callOWM() {
  const request = require('request');
  const argv = require('yargs').argv;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=431f20e3dec4bfcfd571665b88c0f488`;
  request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      let message = `It's ${weather.main.temp} degrees in ${weather.name}! `;
      console.log(message);
      $('body').append(
      '<p>' + data.currentWeather[index].text + '</p>')
    };
  });
}

function callBrain() {
  const request = require('request');
  const argv = require('yargs').argv;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=431f20e3dec4bfcfd571665b88c0f488`;
  request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      let message = `It's ${weather.main.temp} degrees in ${weather.name}! `;
      console.log(message);
      $('body').append(
      '<p>' + data.currentWeather[index].text + '</p>')
    };
  });
}


module.exports = { app, server, closeServer, callOWM };


// const request = require('request');
// const argv = require('yargs').argv;
//
// //let apiKey = '431f20e3dec4bfcfd571665b88c0f488';
// //let city = argv.c || 'portland';
// let url = `http://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=431f20e3dec4bfcfd571665b88c0f488`

// request(url, function (err, response, body) {
//   if(err){
//     console.log('error:', error);
//   } else {
//     let weather = JSON.parse(body)
//     //let message = `It's ${weather.main.temp} degrees in ${weather.name}! `;
//     console.log(weather);
//     //$('#current-temp').html(message)
//   }
// });




















// const bodyParser = require('body-parser');
// const express = require('express');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
//
// const app = express();
//
// app.use(express.static('public'));
// app.use(morgan('common'));
// app.use(bodyParser.json());
//
// mongoose.Promise = global.Promise;
//
//
// app.get('/entries', (req, res) => {
//   NewEntry
//     .find()
//     .then(entries => {
//       res.json(entries.map(entry => entry.apiRepr()));
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({error: 'something went terribly wrong'});
//     });
// });
//
// app.get('/entries/:id', (req, res) => {
//   NewEntry
//     .findById(req.params.id)
//     .then(entry => res.json(entry.apiRepr()))
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({error: 'something went horribly awry'});
//     });
// });
//
// app.post('/entries', (req, res) => {
//   const requiredFields = ['intensity', 'journal'];
//   for (let i=0; i<requiredFields.length; i++) {
//     const field = requiredFields[i];
//     if (!(field in req.body)) {
//       const message = `Missing \`${field}\` in request body`
//       console.error(message);
//       return res.status(400).send(message);
//     }
//   }
//   newEntry
//     .create({
//       intensity: req.body.intensity,
//       journal: req.body.journal
//     })
//     .then(newEntry => res.status(201).json(newEntry.apiRepr()))
//     .catch(err => {
//         console.error(err);
//         res.status(500).json({error: 'Something went wrong'});
//     });
// });
//
// app.use('*', function(req, res) {
//   res.status(404).json({message: 'Not Found'});
// });
//
//
// // closeServer needs access to a server object, but that only
// // gets created when `runServer` runs, so we declare `server` here
// // and then assign a value to it in run
// let server;
//
// // this function connects to our database, then starts the server
// function runServer(databaseUrl=DATABASE_URL, port=PORT) {
//   return new Promise((resolve, reject) => {
//     mongoose.connect(databaseUrl, err => {
//       if (err) {
//         return reject(err);
//       }
//       server = app.listen(port, () => {
//         console.log(`Your app is listening on port ${port}`);
//         resolve();
//       })
//       .on('error', err => {
//         mongoose.disconnect();
//         reject(err);
//       });
//     });
//   });
// }
//
//
// // this function closes the server, and returns a promise. we'll
// // use it in our integration tests later.
// function closeServer() {
//   return new Promise((resolve, reject) => {
//     console.log('Closing server');
//     server.resolve(err => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve();
//     });
//   });
// }
//
// // if server.js is called directly (aka, with `node server.js`), this block
// // runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
// if (require.main === module) {
//   runServer().catch(err => console.error(err));
// };
//
// module.exports = {runServer, app, closeServer};
