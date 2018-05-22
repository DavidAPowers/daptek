"use strict"
require('dotenv').config();

const mongoose = require('mongoose');
const Navlink = require("../models/navlink")
const NavlinksController = require("../controllers/navlinks_controller")

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
  NavlinksController.seedNavlinks();
})
.catch(e => {
  console.log("ERROR unable to connect to mongoose");
  console.log(e);
});
      

