
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../public/server.js')

//const {app, runServer, closeServer} = require('../server')

//allows for should statements
chai.should();

const app = server.app;
const closeServer = server.closeServer;

//allow for http requests
chai.use(chaiHttp);

//
// describe('Hit root url', function() {
//   it('should return 200', function() {
//     return chai.request(app)
//   })
// })

describe('index page', function() {
  after(closeServer);

  it('exists', function() {
    return chai.request(app)
      .get('/')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.html;
    });
  });
});
