var mynew=Vue.extend({
	template:'#mynew',
	data:function(){
		return {
			showIndex:-1
		};
	},
	created:function(){
	},
	computed:{
		foods:function(){
			var data=[];
			for(var i=0;i<this.$store.state.seller_store.sellers.length;i++){
				for(var j=0;j<this.$store.state.seller_store.sellers[i].seller_foods.length;j++){
					data.push(this.$store.state.seller_store.sellers[i].seller_foods[j]);
				}
			}
			return data;
		}
	},
	methods:{
		showIntro:function(i){
			this.showIndex=i;
		},
		hideIntro:function(){
			this.showIndex=-1;
		},
		sendFood:function(index){
			// console.log(this.foods[index]);
			location.href="detail/detail.html?"+"txt="+encodeURI(JSON.stringify(this.foods[index]));
		}
	}
});
Vue.component('mynew',mynew);