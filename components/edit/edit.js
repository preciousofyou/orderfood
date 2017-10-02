var edit=Vue.extend({
    template:"#edit",
    components:{popwindow:popwindow},
    props:["item","isShow"],
    computed:{        
        myItem:function(){
            var temp={};
            this.deepCopy(this.item,temp);
            return temp;
        },
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
        save:function(){
            this.deepCopy(this.myItem,this.item);  //item  myItem
            console.log(this.item);
            this.$emit('close-window');
            this.$emit('update-user');
        },
        closeWindow:function(){
            this.$emit('close-window');
        }
    }
});
Vue.component("edit",edit);