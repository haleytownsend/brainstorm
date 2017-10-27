const chai = require('chai');
const server = require('../src/server');
const should = chai.should();

const app = server.server;
const closeServer = server.closeServer;

chai.use(require('chai-http'));

describe('Brain Storm API test', function() {
  //after(closeServer);

  it('exists', function(done) {
    chai.request(app)
    .get('/entry')
    .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.html});
    done();
  });

  // it('should add a user entry on POST', function() {
  //   const newEntry = {
  //     intensity: 'New blog postsssss',
  //     journal: 'Ipsum bizz foo'};
  //
  //   return chai.request(app)
  //     .post('/entries')
  //     .send(newEntry)
  //     .then(function(res) {
  //       res.should.have.status(201);
  //       res.should.be.json;
  //       res.body.should.be.a('object');
  //       res.body.intensity.should.equal(newEntry.intensity);
  //       res.body.journal.should.equal(newEntry.journal);
  //     });
  //     done();
  // });

});
