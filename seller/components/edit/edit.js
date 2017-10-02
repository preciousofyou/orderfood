var edit=Vue.extend({
	template:'#edit',
	components:{popwindow:popwindow},
	computed:{
		state:function(){
			return this.$store.state.details.edit.fields;
		},
		stata:function(){
			return this.$store.state.details[this.$store.state.curGridName]
		},
		title:function(){
			return this.state.editItem[this.state.key]==""?"新增":"修改-"+this.state.editItem[this.state.key];
		}
	},
	methods:{
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
		editComplete:function(){
			this.$emit('edit-complete');
		},
		input:function(event){
			// console.log(event);
			this.state.editItem.food_pic='images/foods/foods_4/'+event.target.files[0].name;
		}
	}
});