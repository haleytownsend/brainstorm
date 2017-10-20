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
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}

module.exports = { app, server, closeServer }

//each test starts with a new server and there
//is only one server going at a time
