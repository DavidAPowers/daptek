"use strict";
const Navlink = require('../../models/navlink');

describe('Navlink', () => {

  describe('constructor', () => {
    it('Given invalid data, should return new Lead that does not validate', done => {
      let n1 = new Navlink({
		    title: 'PAD 9000',
		    body: 'Teach your machines to dream. Use music to travel through space and time. Compose like a gardener. Do more with less. Inspire the humans of today and tomorrow. Expand your mind. Imagine the impossible...'
		  });
		  console.log(n1);
			n1.validate(err => {
          expect(err.errors.link.message).toEqual("Path `link` is required.");
          expect(err.errors.priority.message).toEqual("Path `priority` is required.");
          done();
      });

    });
  });  

  describe('constructor', () => {
    it('Given valid data, should return new Lead that does not validate', done => {
      let n2 = new Navlink({
		    title: 'PAD 9000',
		    link: '/bio',
		    description: 'PAD 9000 Bio',
		    priority: 1
		  });

			n2.validate(err => {
        expect(err).toEqual(null);
        done();
      });

    });
  });    
});
