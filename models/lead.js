const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let LeadSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true },
  subject: {type: String, required: true },
  phone: String,
  message: String,
  createdAt: {type: Date, default: Date.now}
});

let Lead = mongoose.model('Lead', LeadSchema);
module.exports = Lead;