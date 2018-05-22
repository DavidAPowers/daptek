@extends('layouts.foundation')

@section('content')
	<div class="row">
		<div class="columns medium-8 medium-offset-2">



			<h1>Blog</h1>
		
			@foreach ($articles as $article)
				<h3><a href="/articles/{{$article->id}}">{{$article->title}}</a></h3>
				<p>
				{!! $article->description !!}
				</p>
				<p>
					<a href="/articles/{{$article->id}}">Read More >>></a>
				</p>
				<hr>
			@endforeach
			
		</div> 
	</div>
	<br><br>
	<section class="callout">

			<p class="text-center">Interested in hiring me? Use the <a href="/contact">
			Contact page</a> to get in touch!</p>
			<p class="text-center">To view my software development portfolio, visit the 
			<a href="/portfolio">Portfolio page</a>.</p>
	</section>  	
	<br>
	<br>
	<br>
	<br>	
@endsection
