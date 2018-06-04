const request = require('supertest');
const faker = require('faker');
let app = require('../../app');

describe('GET /', function() {
  it('respond with hello', function(done) {
    request(app)
      .get('/users/')
      .expect(200)
     	.end((err, res) => {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      });	
  });
});

describe('POST /users/register', function() {
  it('respond with json', function(done) {
  	let randomName = faker.name.findName(); // Caitlyn Kerluke
  	let randomEmail = faker.internet.email(); // Rusty@arne.info
  	let randomPass = faker.random.alphaNumeric();
    request(app)
      .post('/users/register')
      .send({email: randomEmail, name: randomName, password: randomPass})
      .set('Accept', 'application/json')
      .expect(200)
     	.end((err, res) => {
        if (err) {

          done.fail(err);
        } else {
          done();
        }
      });	
  });
});

describe('POST /users/login', function() {
  it('respond with json', function(done) {
    request(app)
      .post('/users/login')
      .send({email: 'cyborgk@gmail.com', password: 'monster'})
      .set('Accept', 'application/json')
      .expect(200)
     	.end((err, res) => {
        if (err) {

          done.fail(err);
        } else {
          done();
        }
      });	
  });
});

