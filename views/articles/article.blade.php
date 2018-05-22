@extends('layouts.foundation')

@section('content')
	<div class="row">
		<div class="columns medium-8 medium-offset-2">

			<h1>{{$article->title}}</h1>
			<div><img src="{{$article->image_url}}" /></div>
			<div>{!!$article->content!!}</div>


		</div> 
	</div>
@endsection
