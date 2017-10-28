const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server.js')
const should = chai.should();

const app = server.server;
const closeServer = server.closeServer;
const callOWM =server.callOWM

chai.use(chaiHttp);

describe('Brain Storm app', function() {
  after(closeServer);

  it('Brain Storm app opens on server', function(done) {
   chai.request(app)
    .get('/')
    .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.html});
      done();
      });

  it('Will send a request to the Open Weather Map API', function(){
    chai.request(app)
     .get('http://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=431f20e3dec4bfcfd571665b88c0f488')
     .end(function(res) {
       res.should.have.status(200);
       res.should.be.an.object;
      });
    });

  });
