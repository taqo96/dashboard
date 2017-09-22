//doc for page content

'use strict'

Vue.component('posts', {
	template: `<div id="posts" class="posts-container">
				<h1>CONTENT GALLERY</h1>
				<h3>TOP INSTAGRAM POSTS THIS WEEK:</h3>
				
				<div id="content">
					<img src="img/1.1.jpg"></img>
					<img src="img/2.2.jpg"></img>
					<img src="img/3.3.jpg"></img>

				<h3>CONTENT GALLERY:</h3>
					
					<img src="img/9.jpg"></img><i class="fa fa-share" aria-hidden="true"></i>
					<img src="img/5.jpg"></img>
					<img src="img/7.jpg"></img>
					

				</div>


				
				</div>`,
});
	
var posts = new Vue ({	
	el: '#posts'
});



