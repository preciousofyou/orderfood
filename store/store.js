var store=new Vuex.Store({
	state:{
		curSeller:{}
		// curUser:{}
	},
	// getters:{
	// 	curUser:function(){
	// 		return [];
	// 	}
	// },
	modules:{
		seller_store:sellerModule
		// user_store:userModule
	}
});