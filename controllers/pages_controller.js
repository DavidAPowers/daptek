let NavlinksController = require("./navlinks_controller")
class PagesController {
	static renderPage(res, title, slug, view) {
		let navlinks = NavlinksController.getAll();
	  NavlinksController.getAll()
	  .then(navlinks => {
	    console.log('got em!');
	    res.render(view, { title: 'Page', slug: slug, customJs: '', navlinks: navlinks });
	  })
	  .catch(e => {
	    console.log("ERROR getting navlinks");
	    console.log(e);
	  });
	}

	static index(req, res, next) {
		PagesController.renderPage(res, "David A. Powers", '__home', 'pages/home');
	}
	static show (req, res, next) {
		let slug = req.params["slug"];
		let view = `pages/${slug}`;
		PagesController.renderPage(res, "Welcome", slug, view);
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