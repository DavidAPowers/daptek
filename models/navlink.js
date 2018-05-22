const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let NavlinkSchema = new Schema({
  title: {type: String, required: true},
  link:  {type: String, required: true },
  priority:  {type: Number, required: true },
  description: String,
  createdAt: {type: Date, default: Date.now}
});

let Navlink = mongoose.model('Navlink', NavlinkSchema);
module.exports = Navlink;

 