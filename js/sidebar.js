//doc for side bar

'use strict'

Vue.component('sidebar', {
	template: `<div  class="sidebar-container">
				<h1 id="title">BLOG SPOT</h1>

				<div id="profile" class="profile">
					<h1><i id="usericon" class="fa fa-user-circle-o" aria-hidden="true"></i> JAMIE.L</h1>
					<img src="img/user.png"></img>
				</div>

				<div id="mini-menu">
				<li><a href="dashboard.html">DASHBOARD <i class="fa fa-tachometer" aria-hidden="true"></i></a></li>
				<li><a href="stats.html">STATISTICS <i class="fa fa-bar-chart" aria-hidden="true"></i></a></li>
				<li><a href="#">MY POSTS <i class="fa fa-picture-o" aria-hidden="true"></i></a></li>
				
				<li><a href="#">NOTES <i class="fa fa-sticky-note-o" aria-hidden="true"></i></a></li>
				<a href="#"><input id="swapBtn" type="submit" value="CUSTOMIZE"></a>

				<a href="index.html"><input id="logout" type="submit" value="LOGOUT"></a>



				</div>

				
				
				</div>`,
	
	
});
	
	var sidebar = new Vue ({
	
	el: '#sidebar'
});





