var express = require('express');
var router = express.Router();
let Lead = require("../models/lead")
let LeadsController = require("../controllers/leads_controller")
let PagesController = require("../controllers/pages_controller")


router.get('/leads', LeadsController.index);
module.exports = router;
