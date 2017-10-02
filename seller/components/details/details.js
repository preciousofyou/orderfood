Vue.component('mydetails',{
	template:'#details',
	components:{edit:edit},
	data:function(){
		return{
			items:[]
		};
	},
	computed:{
		state:function(){
			return this.$store.state.details;
		}
	},
	created:function(){
		this.items=this.$store.state.details[this.$store.state.curGridName];
		
		if(location.href.indexOf("=")){
			var loc=location.href;
			var n1=loc.length;//地址的总长度
			var n2=loc.indexOf("=");//取得=号的位置
			var id=decodeURI(loc.substr(n2+1, n1-n2));
			// console.log(JSON.parse(id));
			// console.log(JSON.parse(id));
			this.state.sellers=JSON.parse(id);
		}
		this.getCurUser();

		for(var i=0;i<this.state.sellers.seller_foods.length;i++){
			if(i<4){
				this.$store.state.grid.specialList[0][1].fields.push(this.state.sellers.seller_foods[i]);
			}else if(i>=4&&i<8){
				this.$store.state.grid.specialList[1][1].fields.push(this.state.sellers.seller_foods[i]);
			}else if(i>=8&&i<12){
				this.$store.state.grid.fastfood[0][1].fields.push(this.state.sellers.seller_foods[i]);
			}else if(i>=12&&i<16){
				this.$store.state.grid.fastfood[1][1].fields.push(this.state.sellers.seller_foods[i]);
			}else if(i>=16&&i<20){
				this.$store.state.grid.liaoli[0][1].fields.push(this.state.sellers.seller_foods[i]);
			}else if(i>=20&&i<24){
				this.$store.state.grid.liaoli[1][1].fields.push(this.state.sellers.seller_foods[i]);
			}
		}
	},
	methods:{
		addToCar:function(items,i){
			if(!confirm('你确定将加入购物车吗？')) return;
			alert('成功加入购物车');
		},
		deepCopy:function(obj1,obj2){
			for(var p in obj1){
				if(Array.isArray(obj1[p]))
					obj2[p]=obj1[p].slice(0);
				else if(obj1[p]!=null&&(typeof obj1[p]=='object')){
					obj2[p]={};
					arguments.callee(obj1[p],obj2[p]);
				}else
					obj2[p]=obj1[p];
			}
		},
		beginEdit:function(key){
			if(key){
				for(var i=0;i<this.state.sellers.seller_foods.length;i++){
					if(key==this.state.sellers.seller_foods[i].food_id){
						console.log(this.state.sellers.seller_foods[i]);
						this.$store.commit('details/beginEdit',{
							item:this.state.sellers.seller_foods[i],
							deepCopy:this.deepCopy,
							isAdd:false,
							gridName:this.$store.state.details.edit
						});
						break;
					}
				}
			}else{
				var temp={};
				this.$store.commit('details/beginEdit',{
					item:temp,
					deepCopy:this.deepCopy,
					isAdd:true,
					gridName:this.$store.state.details.edit
				});
			}
			
		},
		completeEdit:function(){
			if(this.state.edit.fields.addOrUpdate=='add'){
				this.$store.commit('details/endEdit',this.$store.state.curGridName);
				var temp={};
				console.log(this.state.edit.fields.editItem);
				
				this.deepCopy(this.state.edit.fields.editItem,temp);
				// this.items[0][1].fields.push(temp);
				console.log(temp);
				this.state.sellers.seller_foods.push(temp);
				console.log(this.state.sellers.seller_foods);
				this.$http({
					url:'http://localhost:8080/seller/addSellerFood',  //getsellerData时从服务器获得商家总信息
					method:'POST',
					data: JSON.stringify(this.state.sellers.seller_foods)       
				}).then(function(res){
					// console.log(JSON.parse(res.data))
					// this.$store.state.seller_store.curUser=res.data[0];
				},function(){});
			}else{
				var key=this.state.edit.fields.key;
				// console.log(this.items[0][1].fields[1][key]);
				// console.log(this.state.edit.fields.editItem[key]);
				this.$store.commit('details/endEdit',this.$store.state.curGridName);
				// for(var i=0;i<this.items[0][1].fields.length;i++){
				// 	if(this.state.edit.fields.editItem[key]==this.items[0][1].fields[i][key]){
				// 		// console.log(this.items[0][1].fields[i][key]);
				// 		this.deepCopy(this.state.edit.fields.editItem,this.items[0][1].fields[i]);
				// 		console.log(this.items[0][1].fields[i]);
				// 		break;
				// 	} 
				// }
				for(var i=0;i<this.state.sellers.seller_foods.length;i++){
					if(this.state.edit.fields.editItem[key]==this.state.sellers.seller_foods[i][key]){
						// console.log(this.items[0][1].fields[i][key]);
						this.deepCopy(this.state.edit.fields.editItem,this.state.sellers.seller_foods[i]);
						this.$http({
							url:'http://localhost:8080/seller/addSellerFood',  //getsellerData时从服务器获得商家总信息
							method:'POST',
							data: JSON.stringify(this.state.sellers.seller_foods)       
						}).then(function(res){
							// console.log(JSON.parse(res.data))
							// this.$store.state.seller_store.curUser=res.data[0];
						},function(){});
						break;
					} 
				}
				
			}
		},
		del:function(key){
			// console.log(key);
			// console.log(this.items[0][1]);
			if(!confirm("确定删除"+key+"吗？")) return;
			else{
				// for(var i=0;i<this.items[0][1].fields.length;i++){
				// 	if(this.items[0][1].fields[i].id==key){
				// 		console.log(this.items[0][1].fields[i].id);
				// 		this.items[0][1].fields.splice(i,1);
				// 		break;
				// 	}
				// }
				for(var i=0;i<this.state.sellers.seller_foods.length;i++){
					if(this.state.sellers.seller_foods[i].food_id==key){
						console.log(this.state.sellers.seller_foods[i].food_id);
						this.state.sellers.seller_foods.splice(i,1);
						break;
					}
				}
				console.log(this.state.sellers.seller_foods);
				this.$http({
					url:'http://localhost:8080/seller/delSellerFood',  //getsellerData时从服务器获得商家总信息
					method:'POST',
					data: JSON.stringify(this.state.sellers.seller_foods)       
				}).then(function(res){
					// console.log(JSON.parse(res.data))
					// this.$store.state.seller_store.curUser=res.data[0];
				},function(){});
			}
		},
		getCurUser:function(){
			this.$http({
				url:'http://localhost:8080/login/getCurUser',  //getsellerData时从服务器获得商家总信息
				method:'POST',
				data:''       
			}).then(function(res){
				console.log(res.data[0]);
				this.state.curUser=res.data[0];
				console.log(this.state.curUser);
			},function(){});
		},
		skip:function(index){
			location.href="../detail/detail.html?"+"txt="+encodeURI(JSON.stringify(this.state.sellers.seller_foods[index]));
		}
	}
});