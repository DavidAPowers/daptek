var express = require('express');
var router = express.Router();
let Lead = require("../models/lead")
let LeadsController = require("../controllers/leads_controller")
let PagesController = require("../controllers/pages_controller")


router.get('/leads', LeadsController.index);
router.post('/contact', LeadsController.create);

router.get('/blog/:slug', function(req, res, next) {
	let slug = req.params["slug"];
  res.render('index', { title: slug, slug: slug, customJs: '' });
});
router.get('/:slug', PagesController.show);
router.get('/', PagesController.index);
module.exports = router;
