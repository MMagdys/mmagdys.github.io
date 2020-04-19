---
layout: default
title: Blog
---

<!-- This loops through the paginated posts -->
<div style="margin-top: 2rem; margin-bottom: 2rem;">

	<div class="container">
	<!-- <div class="row">
		<div class="col-md-8">
			{% for post in site.posts %}
				<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
				<p class="description">
				<span>{{ post.excerpt }}</span>
				</p>
				<div class="catgories">
						<span class="badge badge-pill badge-info">{{post.category}}</span>

					{% for tag in post.tags %}
						<span class="badge badge-pill badge-info">{{tag}}</span>
						{% endfor %}
				</div>
				<hr>
				<br>
			{% endfor %}
		</div>

		<div class="col-md-4" align="center">

			<div style="margin-bottom: 5px; padding: 5px;">
				<div class="form-group">
				<i class="fas fa-search"></i>
				  <label class="col-form-label" for="search">Search</label>
				  <input type="text" class="form-control" placeholder=" search" id="search" style="border-radius: 25px;">
				</div>
			</div>
			<hr>
			
			<div class="list-group">
				<b href="#" class="list-group-item list-group-item-action active">Categories</b>
				{% for cat in site.categories %}
					<a href="#" class="list-group-item list-group-item-action">{{cat | first}}</a>
				{% endfor %}
			</div>
		</div>

	</div> -->


	<div class="row">

	{% for post in site.posts %}

				<div class="col-md-4">
				<div class="card mb-3" style="padding: 0;">
					
					<a href="{{ post.url }}">
					<img style="height: 200px; width: 100%; display: block;" src="/assets/posts_img/{{post.title}}.png" alt="{{post.title}}">
					</a>
					<div class="card-body">
					<h3 >{{ post.title }}</h3>
					<hr>
					<div class="catgories">
						<span class="badge badge-pill badge-info">{{post.category}}</span>

					{% for tag in post.tags %}
						<span class="badge badge-pill badge-secondary">{{tag}}</span>
						{% endfor %}
				</div>
				<hr>
					  <p class="card-text" style=" text-align: justify; text-justify: inter-word;">{{ post.excerpt | strip_html | truncatewords:20 }} <a href="{{ post.url }}">read more</a></p>
					  
					</div>
					
				  </div>
				  </div>

			{% endfor %}

	

				  </div>

</div>



</div>
