"use strict";
const Lead = require('../../models/lead');

describe('Lead', () => {

  describe('constructor', () => {
    it('Given invalid data, should return new Lead', done => {
      let lead1 = new Lead({
		    title: 'PAD 9000',
		    body: 'Teach your machines to dream. Use music to travel through space and time. Compose like a gardener. Do more with less. Inspire the humans of today and tomorrow. Expand your mind. Imagine the impossible...'
		  });
		  console.log(lead1);
      expect(lead1.title).toEqual(undefined);
			lead1.validate(err => {
          expect(err.errors.name.message).toEqual("Path `name` is required.");
          expect(err.errors.email.message).toEqual("Path `email` is required.");
          expect(err.errors.subject.message).toEqual("Path `subject` is required.");
          done();
      });

    });
  });  

  describe('constructor', () => {
    it('Given valid data, should return new Lead that does not validate', done => {
      let lead2 = new Lead({
		    name: 'PAD 9000',
		    email: 'cyborgk@gmail.com',
		    subject: 'Send more widgets',
		    phone: '773 641 1561',
		    message: 'widget emergency!'
		  });

			lead2.validate(err => {
        expect(err).toEqual(null);
        done();
      });

    });
  });    
});
