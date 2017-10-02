var mypage=Vue.extend({
	template:'#mypage',
	data:function(){
		return {
			curPage:1
		};
	},
	computed:{
		pages:function(){
			return Math.ceil(this.$store.state.seller_store.sellerLength/8);
			// return Math.ceil($....length/40);
			// return 5;
		}
	},
	methods:{
		changePage:function(i){
			if(i<1||i>this.pages) return;
			if(i>this.curPage){
				this.$store.state.seller_store.startIndex=this.$store.state.seller_store.endIndex;
				this.$store.state.seller_store.endIndex+=8;
			}else{
				this.$store.state.seller_store.endIndex=this.$store.state.seller_store.startIndex;
				this.$store.state.seller_store.startIndex-=8;
			}
			this.curPage=i;
			
		}
	}
});
Vue.component('mypage',mypage);


