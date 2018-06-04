"use strict";
const User = require('../../models/user');

describe('User', () => {
  describe('constructor', () => {
    it('Given valid data, should return new User', done => {
      let user = new User({
		    name: 'Cyborg K',
		    email: 'cyborgk@gmail.com'
		  });
			user.validate(err => {
        expect(err).toEqual(null);
        done();
      });

    });
  });    
});
