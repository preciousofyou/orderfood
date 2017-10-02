var myinfo=Vue.extend({
    template:"#myinfo",
    data:function(){
        return {
            msg:"我的信息",
            // userData:{
            //     username:"ajima",
            //     password:"123456",
            //     sex:"male",
            //     address:"江西农业大学南区16#303",
            //     tel:"18702623608"
            // },
            isShow:false,
            items:['username','password','sex','address','tel']
        };
    },
    computed:{
        user:function(){
            return this.$store.state.seller_store.curUser;
        },
        userData:function(){
            var temp={};
            this.deepCopy(this.user,temp);
            return temp;
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
        edit:function(){
            this.isShow=true;
        },
        closeWindow:function(){
            this.isShow=false;
        },
        updateUser:function(){
            for(var i=0;i<this.items.length;i++){
                this.$store.state.seller_store.curUser[this.items[i]]=this.userData[this.items[i]];
            }
            var _this=this;
            // console.log(this.userData)
            this.$http({
				url:'http://localhost:8080/login/updateUser',  //getsellerData时从服务器获得商家总信息
				method:'POST',
                data:JSON.stringify(this.userData)
                // JSON.stringify(this.userData)   
			}).then(function(res){ 
                // console.log(res.data);
			},function(){});
        }
    }
});
Vue.component("myinfo",myinfo);