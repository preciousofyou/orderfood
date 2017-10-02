var store=new Vuex.Store({
	state:{
		curGridName:'specialList',
		curIndex:0
		// isAdmin:true
	},
	mutations:{
		newIndex:function(){
			window.location='./a.html'
		}
	},
	modules:{
		grid:gridModule,
		details:detailsModule
	}
});