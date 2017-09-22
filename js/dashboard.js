//Doc for dashboard

'use strict';



var navbar = new Vue({

	
	el: '#navbar',

	
	data: {
		active: 'dashboard'
	},

	
	methods: {
		makeActive: function(item){
			
			this.active = item;
		}
	}
});


	







