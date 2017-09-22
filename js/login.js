//Doc for login page

'use strict';

Vue.component('login-page', {
	template: `<div class="login-container">
				<h1>BLOG SPOT</h1>
				

				<div id="user-log">
				<i id="usericon" class="fa fa-user-circle-o" aria-hidden="true"></i>
				<br><br>
				<label>username</label>
				<br>
				<input type="text" id="username" name="username">
				<br><br>
				<label>password</label>
				<br>
				<input type="text" id="password" name="password">
				<br><br>
				<form action="dashboard.html"><input  v-on:click="checkpass" id="btn" type="submit" value="LOGIN"></form>
			

				<br><br>
				<a href="#">forgot  password!</a>
				</div
				</div>`,



	 methods: {
    checkpass: function() {
      event.preventDefault();

      var pass = document.getElementById('password').value; 
      var user = document.getElementById('username').value; 

      if(user === 'taqiyya' && pass === '123456') {
        alert('password correct!');

        window.location = "./dashboard.html";
        
      } 
    }
  }
});






	
	var loginpage = new Vue ({
	
	el: '#loginpage'
});

