var express = require('express');
var router = express.Router();

router.get('/blog/:slug', function(req, res, next) {
	let slug = req.params["slug"];
  res.render('index', { title: slug, slug: slug, customJs: '' });
});
router.get('/:slug', function(req, res, next) {
	let slug = req.params["slug"];
  res.render('index', { title: 'Page', slug: slug, customJs: '' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello', slug: '__home', customJs: '' });
});
module.exports = router;
