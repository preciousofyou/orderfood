var mylist=Vue.extend({
	template:'#mylist',
	data:function(){
		return {
			
		};
	},
	methods:{
		changeList:function(str){
			this.$store.state.seller_store.listcurShow=str;
			this.$store.state.seller_store.cartShow=false;
		}
	}
});
Vue.component('mylist',mylist);