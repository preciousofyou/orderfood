var mybanner=Vue.extend({
	template:'#mybanner',
	data:function(){
		return {
			aImgs:['images/banner/banner_1.png','images/banner/banner_2.png','images/banner/banner_3.png','images/banner/banner_4.png','images/banner/banner_5.png'],
			curIndex:0,
			handler:null,
			lastIndex:-1
		};
	},
	computed:{
		nextIndex:function(){
			return this.curIndex+1>=this.aImgs.length?0:this.curIndex+1;
		}
	},
	created:function(){
		this.handler=setInterval(this.action,3000);
	},
	methods:{
		action:function(){
			this.lastIndex=this.curIndex;
			this.curIndex=this.nextIndex;
		},
		stop:function(){
			clearInterval(this.handler);
		},
		start:function(){
			clearInterval(this.handler);
			this.handler=setInterval(this.action,3000);
		}
	}
});
Vue.component('mybanner',mybanner);