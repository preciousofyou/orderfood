var mypay=Vue.extend({
    template:"#myPay",
    components:{popwindow:popwindow},
    props:["isShow"],
    created:function(){
        // console.log(this.isShow);
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
        closeWindow:function(){
            this.$emit('close-window');
        }
    }
});
Vue.component('mypay',mypay);