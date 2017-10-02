var mybody=Vue.extend({
	template:'#mybody',
	// components:{mybanner:mybanner},
	data:function(){
		return {
			seller_items:['seller_pic','seller_name','seller_acti','delivery_time','seller_sales'],
			food_items:['food_pic','food_name','seller_name'],
			totalData:[],  //用来接收服务器传过来的数据
			pageInfo:8, //每次显示40个商家
			index:0,
			showIndex:-1,
			list:-1
		};
	},
	computed:{
		sellers:function(){   //计算属性sellers totalData中分解出所需要的数据
			var data=[];
			for(var i=0;i<this.totalData.length;i++){
				data[i]={};
				for(var j=0;j<this.seller_items.length;j++){
					data[i][this.seller_items[j]]=this.totalData[i][this.seller_items[j]];
				}
			}
			return data;
		},
		foods:function(){
			// var data=[];
			var data1=[];
			for(var i=0;i<this.totalData.length;i++){
				// console.log(this.totalData[i].seller_foods);
				for(var j=0;j<this.totalData[i].seller_foods.length;j++){
					data1.push(this.totalData[i].seller_foods[j]);
				}
			}
			// for(var m=0;m<data1.length;m++){
			// 	data[m]={};
			// 	for(var h=0;h<this.food_items.length;h++){
			// 		data[m][this.food_items[h]]=data1[m][this.food_items[h]];
			// 	}
			// }
			return data1;
		}
	},
	created:function(){
		this.getData();
		this.getCurUser();
		  //this.sellers.length 商家总个数
		// console.log(document.cookie);   //document.cookie
		// console.log(1);
		// console.log(location.href);
		// if(location.href.indexOf("=")){
		// 	var loc=location.href;
		// 	var n1=loc.length;//地址的总长度
		// 	var n2=loc.indexOf("=");//取得=号的位置
		// 	var id=decodeURI(loc.substr(n2+1, n1-n2));
		// 	console.log(JSON.parse(id)[0]);
		// 	this.$store.state.seller_store.curUser=JSON.parse(id)[0];
		// }
		
		
		// if(id.length!=0){
		// 	// console.log(0);
			
		// };
		// console.log(this.$store.state.curUser);
		
	},
	methods:{
		showName:function(index){
			this.showIndex=index;
		},
		hideName:function(){
			this.showIndex=-1;
		},
		showList:function(i){
			this.list=i;
		},
		hideList:function(){
			this.list=-1;
		},
		getCurUser:function(){
			this.$http({
				url:'http://localhost:8080/login/getCurUser',  //getsellerData时从服务器获得商家总信息
				method:'POST',
				data:''       
			}).then(function(res){
				this.$store.state.seller_store.curUser=res.data[0];
			},function(){});
		},
		getData:function(){
			this.$http({
				url:'http://localhost:8080/seller/getSeller',  //getsellerData时从服务器获得商家总信息
				method:'POST',
				data:''       
			}).then(function(res){    //res.data接收数据
				this.totalData=res.data;    
				this.$store.state.seller_store.sellers=res.data;
				this.$store.state.seller_store.sellerLength=this.$store.state.seller_store.sellers.length;
			},function(){});
		},
		sendSeller:function(index){    //点击获得点击的商家的信息
			console.log(this.totalData[index]);
			this.$store.state.curSeller=this.totalData[index];
			// console.log(this.$store.state.curSeller);
			// return this.totalData[index];

			location.href="seller/seller.html?"+"txt="+encodeURI(JSON.stringify(this.totalData[index]));
		},
		sendFood:function(index){
			console.log(this.foods[index]);
			location.href="detail/detail.html?"+"txt="+encodeURI(JSON.stringify(this.foods[index]));
		}
	}
});
Vue.component('mybody',mybody);