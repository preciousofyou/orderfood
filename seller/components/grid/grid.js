Vue.component('grid',{
	template:"#grid",
	computed:{
		state:function(){
			return this.$store.state.grid[this.$store.state.curGridName];
		}
	},
	methods:{
		addToCar:function(state,i){
			if(!confirm("你确定将"+this.state.fields+"加入购物车吗?")) return;
			alert("添加购物车成功");
		}
	}
});