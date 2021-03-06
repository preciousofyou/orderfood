Vue.component('mymenu',{
	template:"#menu",
	data:function(){
		return{
			menus:[],
			curMenu:0
		}
	},
	created:function(){
		this.menus=[
			{
				name:'特色菜系',
				gridName:'specialList'
			},
			{
				name:'快餐便当',
				gridName:'fastfood'
			},
			{
				name:'异国料理',
				gridName:'liaoli'
			}
		];
	},
	methods:{
		changeMenu:function(item,index){
			this.curMenu=index;
			this.$store.state.curGridName=item.gridName;
		}
	}
});