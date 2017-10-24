const express = require('express');
const app = express();
app.use(express.static('public'));

const server = app.listen(process.env.PORT || 8080);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const {DATABASE_URL, PORT} = require('./config');
const {BlogPost} = require('./models');

app.use(morgan('common'));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;





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

module.exports = { app, server, closeServer }
