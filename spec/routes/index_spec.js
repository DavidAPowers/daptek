const request = require('supertest');
let app = require('../../app');

describe('GET /', function() {
  it('respond with json', function(done) {
    request(app)
      .post('/users/register')
      .expect(200)
     	.end((err, res) => {
        if (err) {
        	console.log('the test caused an error!');
          done.fail(err);
        } else {
          done();
        }
      });	
  });
});

