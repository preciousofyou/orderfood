var sellerModule={
	namespaced:true,
	state:{
		changeIndex:1,
		startIndex:0,  //显示从第几个商家
		endIndex:8,  //到第几个
		sellerLength:0,   //总商家个数，mybody.js中为它赋值 
		cartShow:true,
		sellers:[],   //总商家信息
		curUser:{},  //在线用户信息 
		listcurShow:'car'
	},
	mutations:{
		changePage:function(state,index){
			state.changeIndex=index;
		}
	}
}




