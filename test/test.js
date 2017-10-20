
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../public/server.js')

//const {app, runServer, closeServer} = require('../server')

//allows for should statements
const should = chai.should();

const app = server.app;
const storage = server.storage;

//allow for http requests
chai.use(chaiHttp);

//
// describe('Hit root url', function() {
//   it('should return 200', function() {
//     return chai.request(app)
//   })
// })

describe('index page', function() {
  it('exists', function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
    });
  });
});
