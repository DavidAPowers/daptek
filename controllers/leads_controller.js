const Lead = require("../models/lead")

class LeadsController {
	static create(req, res, next) {
		let name = req.body.name;
		let email = req.body.email;
		let subject = req.body.subject;
		let phone = req.body.phone;
		let message = req.body.message;

		let newLead = new Lead({
			name: name, 
			email: email, 
			subject: subject, 
			phone: phone, 
			message: message
		});
		newLead.save()
		.then(doc => {
			res.render("thankyou", {lead:doc});
		})
		.catch(e => {
			console.log("There was an error saving the new lead");
			console.log(e);
		})
	}
	static index(req, res, next) {
		Lead.find()
		.sort({created_at: "descending"})
		.exec((err,leads) => {
			if(err){return next(err);}
			res.render("leads", {leads: leads});
		});
	}
}

module.exports = LeadsController;