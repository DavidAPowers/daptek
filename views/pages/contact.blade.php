@extends('layouts.foundation')

@section('content')

  <div class="row">

    <div class="columns medium-8 medium-offset-2">

	<h1>Contact</h1>
	<p>I'm always looking for new projects and partners.
	Contact me today and let me know what I can do for you!</p>
	
	<form action="/contact" method="post">

		<label for="name">Name</label>
		<input class="half" name="name" type="text" />

		<label for="email">Email</label>
		<input class="half" name="email" type="text" />

		<label for="phone">Phone</label>
		<input class="half" name="phone" type="text" />

		<label for="subject">How can I help you?</label>
		<input name="subject" type="text" />

		<label for="message">Message</label>
		<textarea name="message" class="contact-form"></textarea>

		{{ csrf_field() }}
		<input type="submit" class="button submit" value="Contact Me">	
	</form>
    </div>
  </div> 	
@endsection
