const marked = require('marked');
const fs = require('fs');
const path = require('path');
const NavlinksController = require("./navlinks_controller");


class PagesController {
	static getMdContent(slug) {
		let path = `content/${slug}.md`;
		try {
		  let content = fs.readFileSync(path, 'utf-8');
		  return marked(content);
		} catch (err) {
			if (err.code === 'ENOENT') {
			  console.log('Markdown file not found!');
			  return false;
			} else {
			  throw err;
			  return false;
			}
		}		
	}
	static renderPage(res, title, slug, view) {
	  NavlinksController.getAll()
	  .then(navlinks => {
	    console.log('got em!');
	    let content = PagesController.getMdContent(slug);
	    if(!content) {
	    	PagesController.renderPage(res, "404", slug, `pages/404`);
	    }
	    let data;
	    if(title==="404") {
	    	data = {title: '404', slug: slug, customJs: '', navlinks: navlinks, content: content}
	    	res.status(404).render(view, data);
	    } else {
	    	data = {title: 'Page', slug: slug, customJs: '', navlinks: navlinks, content: content}
				res.render(view, data);
	    }
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
    	PagesController.renderPage(res, "404", slug, `pages/404`);
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