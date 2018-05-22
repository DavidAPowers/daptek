class PagesController {
	static index(req, res, next) {
		let nav = PagesController.nav();
		res.render('pages/home', { title: 'David A. Powers', slug: '__home', customJs: '', nav: nav });
	}
	static show (req, res, next) {
		let slug = req.params["slug"];
		let view = `pages/${slug}`;
		let nav = PagesController.nav();
	  res.render(view, { title: 'Page', slug: slug, customJs: '', nav: nav });
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