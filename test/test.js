
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../public/server.js')
const should = chai.should();

const app = server.server;
const closeServer = server.closeServer;

chai.use(chaiHttp);

describe('index page', function() {
  after(closeServer);

  it('exists', function(done) {
   chai.request(app)
    .get('/')
    .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.html});
      done();
      });
    });
