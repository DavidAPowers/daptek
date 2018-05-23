let Navlink = require("../models/navlink")

class NavlinksController {
	static getAll() {
	  let q = Navlink.find().sort({priority: "ascending"});
	  return q.exec();
	}
	static seedNavlinks() {
	  let navlinks = [
	    {title: "About", description: "About", link: "/about", priority: 1},
	    {title: "Skills", description: "Skills", link: "/skills", priority: 2},
	    {title: "Clients", description: "Clients", link: "/clients", priority: 3},
	    {title: "Projects", description: "Projects", link: "/projects", priority: 4},
	    {title: "Playground", description: "Playground", link: "/playground", priority: 5},
	    {title: "Contact", description: "Contact", link: "/contact", priority: 10}
	  ];
	  for(let i=0;i<navlinks.length;i++) {
	    let navlink = new Navlink(navlinks[i]);
	    navlink.save()
	    .then(doc => {
	      console.log(doc.name);
	      console.log(doc._id);
	      let query = Navlink.findOne({_id: doc._id});
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
	  }
	  
	}
}

module.exports = NavlinksController;