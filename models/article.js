const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ArticleSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: {type: String, required: true },
  description: {type: String, required: true },
  content: {type: String, required: true },
  image_url: String,
  createdAt: {type: Date, default: Date.now}
});

let Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
