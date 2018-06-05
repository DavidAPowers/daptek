"use strict";
const User = require('../../models/user');

describe('User', () => {
  describe('constructor', () => {
    it('Given valid data, should return new User', done => {
      let user = new User({
		    name: 'Cyborg K',
		    email: 'cyborgk@gmail.com'
		  });
      user.setPassword('boy');
			user.validate(err => {
        expect(err).toEqual(null);
        done();
      });
    });
  });   
  describe('.setPassword(password)', () => {
    let u1 = new User({
      name: 'asfdfgh',
      email: 'a@b.c'
    });
    
    it('Given no password has been set, user.salt and user.hash are undefined', () => {     
      expect(u1.salt).toEqual(undefined);       
      expect(u1.hash).toEqual(undefined);       
    });
    it('Given a password has been set, user.salt and user.password are not null', () => {     
      let u2 = new User({
        name: 'asfdfgh',
        email: 'a@b.c'
      });
      u2.setPassword('dogfish');
      expect(u2.salt.length).toEqual(32);       
      expect(u2.hash.length).toEqual(128);       
    });
  });  
  describe('.validPassword(password)', () => {
    let user = new User({
      name: 'Cyborg K',
      email: 'cyborgk@gmail.com'
    });
    it('Given a valid password returns true', () => {
      user.setPassword('dogfish');
      let t = user.validPassword('dogfish');
      expect(t).toEqual(true);       
    });
    it('Given an invalid password returns false', () => {
      user.setPassword('dogfish');
      let f = user.validPassword('wolfhound');
      expect(f).toEqual(false);       
    });    
  });    

 
});
