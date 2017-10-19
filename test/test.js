
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


describe('Hit root url', function() {
  it('should return 200', function() {
    return chai.request('http://localhost:8080')
  })
})



//describe('storm', function() {

  //activate server before tests run server
  //prevents race conditions when tests start
  //running before the server starts
//  before(function() {
//    return runServer();
//  });

  //close server at the end of each test to
  //each test starts with a new server and there
  //is only one server going at a time
  //after(function() {
  //  return closeServer();
//  });

//test strategy:
//GET


//test strategy
//POST new entry


//test strategy
//GET
//PUT


//test strategy
//GET
//DELETE
//})
