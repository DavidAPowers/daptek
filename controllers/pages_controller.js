const marked = require('marked');
const fs = require('fs');
const path = require('path');
const NavlinksController = require("./navlinks_controller");


class PagesController {
	static getMdContent(slug) {
		let content = fs.readFileSync(`content/${slug}.md`, 'utf-8');
		return marked(content);
	}
	static renderPage(res, title, slug, view) {
	  NavlinksController.getAll()
	  .then(navlinks => {
	    console.log('got em!');
	    let content = PagesController.getMdContent(slug);
	    let data = {title: 'Page', slug: slug, customJs: '', navlinks: navlinks, content: content}
	    res.render(view, data);
	  })
	  .catch(e => {
	    console.log("ERROR getting navlinks");
	    console.log(e);
	  });
	}

	static index(req, res, next) {
		PagesController.renderPage(res, "David A. Powers", 'home', 'pages/home');
	}
	static show (req, res, next) {
		//check if file exists
		let slug = req.params["slug"];
		const path = require('path');
		let viewpath = path.resolve(__dirname,`../views/pages/${slug}.hbs`);
		console.log(viewpath);
	
		if (!fs.existsSync(viewpath)) {
			let view = `pages/404`;
    	PagesController.renderPage(res, "404", slug, view);
		} else {
			let view = `pages/${slug}`;
			PagesController.renderPage(res, "Welcome", slug, view);
		}
	
	}
	static nav() {
		return `
			<ul class="menu" data-responsive-menu="drilldown medium-dropdown">
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/code">Code</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
      </ul>  
		`;
	}
}

module.exports = PagesController;