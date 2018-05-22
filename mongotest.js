"use strict"
require('dotenv').config();

const mongoose = require('mongoose');
let Lead = require("./models/lead")

let db = mongoose.connection;
let mongoUrl = process.env.MONGODB_URI;
let document_id;

db.on('error', () => {
 console.log('error communicating with db');
});


mongoose.connect(mongoUrl, (err) => {
  if (err) {
    return console.log('problem connecting to db!' + err);
  }
  console.log('connected!');
  let lead = new Lead({
    name: 'PAD 9000',
    email: 'cyborgk@gmail.com',
    subject: 'Send more widgets',
    phone: '773 641 1561',
    message: 'widget emergency!'
  });

  lead.save()
  .then(doc => {
  	console.log(doc.name);
  	console.log(doc._id);
  	let query = Lead.findOne({_id: doc._id});
		return query.then();
  })
  .then(result => {
  	console.log("look what I found...");
  	console.log(result);
  	db.close();
    process.exit();
  })
  .catch(e => {
  	console.log("horrors!");
  	console.log(e);
  })
})
.catch(e => {
    console.log("ERROR unable to connect to mongoose");
    console.log(e);
  });
