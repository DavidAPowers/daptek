const request = require('supertest');
const faker = require('faker');
let app = require('../../app');

/*
describe('GET /dashboard/sadf', function() {
  fit('respond with 404', function(done) {
    request(app)
      .get('/dashboard/sadf')
      .expect(404)
     	.end((err, res) => {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      });	
  });
});

describe('GET /dashboard/', function() {
  fit('respond with 404', function(done) {
    request(app)
      .get('/dashboard/')
      .expect(404)
      .end((err, res) => {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      }); 
  });
});
*/
describe('GET /dashboard/leads', function() {
  it('respond with 200', function(done) {
    request(app)
      .get('/dashboard/leads')
      .expect(200)
      .end((err, res) => {
        if (err) {
          done.fail(err);
        } else {
          expect(true).toEqual(false);
          done();
        }
      }); 
  });
});
