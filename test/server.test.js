const chai = require('chai');
const server = require('../src/server');
const should = chai.should();

const app = server.server;
const closeServer = server.closeServer;

chai.use(require('chai-http'));

describe('Static Server', function() {
  after(closeServer);

  it('serves the Brain Storm app', function(done) {
   chai.request(app)
    .get('/')
    .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.html;
      done();
    });
  });
});
