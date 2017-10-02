var contentConfig={
	namespaced:true,
	fields:{
		title:'菜单信息',
		isEdit:true,
		editShow:false,
		editItem:{food_id:"",food_pic:"",food_name:"",food_price:'',food_old_price:''},
		key:'food_id',
		addOrUpdate:'add',
		field:[
			{name:'food_id',isKey:true},
			{name:'food_pic',type:'file'},
			{name:'food_name'},
			{name:'food_price'},
			{name:'food_old_price'}
		]
	}

};
var detailsModule={
	namespaced:true,
	state:{
		details:[],
		sellers:[],
		curUser:{}
	},
	mutations:{
		beginEdit:function(state,options){
			var targetStore=options.gridName.fields;
			options.deepCopy(options.item,targetStore.editItem);
			targetStore.editShow=true;
			targetStore.addOrUpdate=options.isAdd?'add':'update';
		},
		endEdit:function(state,gridName){
			state.edit.fields.editShow=false;
		}
	},
	modules:{
		specialList:{state:specialListConfig},
		fastfood:{state:fastfoodConfig},
		liaoli:{state:liaoliConfig},
		edit:{state:contentConfig}
	}
};