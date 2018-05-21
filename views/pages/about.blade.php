@extends('layouts.foundation')

@section('content')
	<div class="row">
		<div class="columns medium-8 medium-offset-2">

			<h1>About Me</h1>
			
			<p>
			I have over 15 years experience developing custom applications,
			websites, and databases as a front and back end developer.
			I'm an advocate for agile and XP based approaches to software
			development. I have a strong understanding of TDD, BDD, OOP, SOLID, 
			MVC, and design patterns. I take an interdisciplinary, user-centered
			approach to technology that integrates research from 
			cognitive psychology, usability, UX, and design.
			</p>

			<h3>My Story</h3>

			<p>
				I've been playing with technology for as long as I can remember. 
				My first big project, around the age of ten,
				was coding a primitive version of Space Invaders
				in Basic on a Texas Instruments 
				<a href="https://www.youtube.com/watch?v=uUKip0eNY1c" target="_blank">
				TI-99/4A.</a>
			</p>
			<p>
				Later, I learned PHP, Flash, HTML, JavaScript, and Python. Around 2000, I 
				began freelancing on the side. In 2007, I decided to focus on being a 
				full time developer. I continue to be passionate about writing great 
				code, and am currently working on several long-term, 
				<a href="http://tech.davidapowers.dev/portfolio">
				personal software projects</a>.
			</p>

		</div>


	</div>
	<section class="callout">

			<p class="text-center">Interested in hiring me? Use the <a href="/contact">
			Contact page</a> to get in touch!</p>
			<p class="text-center">To view my software development portfolio, visit the 
			<a href="/portfolio">Portfolio page</a>.</p>
	</section>  	
	<div class="row">
		<div class="columns medium-8 medium-offset-2 icon-list">

			<h2>The Zen of Software Engineering</h2>

			<ul class="icon-list">

			<li class="row icon-list">
				<div class="column medium-1 text-center">
					<p class="icon-bullet"><i class="step fi-wrench size-12"></i></p>
				</div>
				<div class="column medium-11">
					<h3>Refactor, refactor, refactor.</h3>
					<p>
						Writing great code is an iterative process. 
						Early versions of any program always have room for improvement.
						Developers need to stay humble and not get too attached to the 
						code they write. Great developers know there is always more to 
						learn; they love to tinker, hack, experiment, and play.
					</p>

				</div>
				<hr class="show-for-small-only">
			</li>

			<li class="row">
				<div class="column medium-1 text-center">
					<p class="icon-bullet"><i class="step fi-clipboard-pencil size-12"></i></p>
				</div>
				<div class="column medium-11">
					<h3>Always write tests.</h3>
					<p>
						Robust, quality code is testable, and is continuously tested. Bad code 
					 cannot be tested easily. Tests not only ensure that code works, 
					 but greatly increase the robustness and quality of the codebase, 
					 allow projects to be refactored in an agile manner, and often
					 decrease overall development time.
					</p>
				</div>
				<hr class="show-for-small-only">
			</li>

			<li class="row icon-list">
				<div class="column medium-1 text-center">
					<p class="icon-bullet"><i class="step fi-x-circle size-12"></i></p>
				</div>
				<div class="column medium-11">
					<h3>There is no silver bullet.</h3>
					<p>
						No framework, tool, or technology is perfect. Every decision in 
						software development involves trade-offs and potential risks. 
						Beware of developers who have only a single tool in their toolbox;
						bRather than searching for optimum solutions, they tend to
						dogmatically use their preferred tool or framework, even when it is
						wildly inappropriate.
					</p>
				</div>
				<hr class="show-for-small-only">
			</li>

			
			<li class="row icon-list">
				<div class="column medium-1 text-center">
					<p class="icon-bullet"><i class="step fi-torsos size-12"></i></p>
				</div>
				<div class="column medium-11">
					<h3>Software is inherently social.</h3>
					<p>Despite the reputation of developers as antisocial, any successful
					software project is a group effort. We as developers need empathy for 
					other developers, for project stakeholders, and for the users who must
					interact with the tools we create. Ultimately, we don't write code for 
					machines, we write code for human beings. This should impact 
					the way we approach our craft.</p>
					
				</div>
				<hr class="show-for-small-only">
			</li>






		

		
		</ul>				
		
	

		</div> 
	</div>
@endsection
