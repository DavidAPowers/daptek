@extends('layouts.foundation')

@section('content')
  <div class="row">

	<div class="medium-8 medium-offset-2 columns ">
		<h1>Software Portfolio</h1>

		<h3>Personal Projects</h3>



		<h4>Machine Matrix</h4>

		<p>
			Machine Matrix is a Content Management System aimed at businesses that buy and sell
			industrial machines. It includes CRM tools, invoicing tools, and the ability to track 
			a machine's location and status over its entire lifecycle.
		</p> 

		<h4>Moodflo</h4>

		<p>
			Moodflo is a web app designed especially for individuals suffering from mood disorders.
			It combines journaling tools with the ability to track mood, awareness, concentration,
			and energy over time.
		</p> 		

		<h4>SuperSlick CMS</h4>

		<p>
			SuperSlick Content Management System is designed to be a superior alternative to sites
			attempting to use WordPress as a CMS, as well as overly complex CMS tools such as Drupal and
			Joomla. It features special modules aimed at musicians, bands, DJ's, record labels, visual
			artists, and art galleries.

		</p>

		<h4>The Bunker</h4>

		<p><b>The Bunker</b> is a work of interactive fiction, or "text adventure" as it was once 
			back in the day. It was created with the innovative natural language program 
			<b>Inform 7</b>. The Bunker is currently in beta and may be played <a target="_blank" 
			href="/the-bunker/play.html">here</a>.

		<h4>Flow Factory</h4>

		<p>
			Flow Factory is an experimental productivity and Project Management tool, designed to supercharge
			productivity and maximize concentration, awareness, and flow.
		</p> 	

		<h3>Client Projects</h3>

		<h4>Vets Prevail</h4>

		<p>While working with Vets Prevail, I developed an advanced multimedia e-learning engine that utilized choose-your-own-adventure type branching logic. The engine was used to teach cognitive-behavioral therapy to veterans returning from Iraq and Afghanistan. The front-end for the e-learning software was coded with <b>ActionScript 3</b>, and <b>Ruby on Rails</b> was used for the back end.</p> 

		<ul>
			<li><a href="https://www.vetsprevail.org/" target="_blank">www.vetsprevail.org</a></li>
		</ul>

		<h4>AskBlue Medicare / AskBlue Federal</h4>

		<p>I was the sole full-stack developer on the AskBlue projects while working with Sandstorm Design as both employee and contractor. I created an <b>ActionScript 3</b> game engine with branching choose-your-own adventure logic and synchronized audio and animation for the front-end. The client had requested that we run the app on Microsoft servers, so on the back end, I used <b>PHP, the Kohana framework, and a Microsoft SQL database.</b> I created a full back end reporting and analytics engine, and also ported parts of the game engine to <b>PHP</b>, which gave us the option of creating a version of the site that screen readers could access.</p> 


		<ul>
			<li><a href="http://www.askbluemedicare.com/" target="_blank">www.askbluemedicare.com</a></li>
			<li><a href="http://askblue.fepblue.org/" target="_blank">askblue.fepblue.org</a></li>
		</ul>

		</div>
	</div>

	<section class="callout">

		<p class="text-center">Interested in hiring me? Use the <a href="/contact">
		Contact page</a> to get in touch!</p>
	</section>  	
	
  <div class="row">
		<div class="medium-8 medium-offset-2 columns ">

		<h4>Liquid Thread</h4>

		<p>While freelancing at Liquid Thread, I worked as a full-stack developer on several major corporate websites. Some have since been redesigned, but the the sites listed below are essentially unchanged since I worked on them. All these sites used a custom <b>Ruby on Rails CMS</b> (originally created by Liquid Thread's primary developer), with a significant front-end component created using <b>Backbone, Handlebars, and CoffeeScript.</b></p>                
		<ul>
			<li><a href="http://beamsuntory.com/" target="_blank">beamsuntory.com</a></li>
			<li><a href="http://effenvodka.com/" target="_blank">effenvodka.com</a></li>
			<li><a href="https://www.sauzatequila.com/" target="_blank">www.sauzatequila.com</a></li>
		</ul>

		<h4>1xRun</h4>

		<p>I worked as Chief Technology Officer at 1xRun, and as part of my duties, I updated and refactored 1xRun's e-commerce website, which was built in <b>PHP with CodeIgniter</b>. The site suffered from a great deal of poorly written, untestable code, and some pages and database queries were extremely slow. I not only fixed numerous bugs, but with the help of data supplied by New Relic, was able to identify and optimize the slowest website components; as a result, site performance was significantly improved, with some operations performing as much as 100 times faster. I also created a new set of blogging tools, using <b>PHP micro-framework Slim.</b></p>
		<p><a href=""></a></p>
		<ul>
			<li><a href="https://www.1xrun.com/">www.1xrun.com</a></li>
		</ul>

	</div>
  </div>
@endsection
