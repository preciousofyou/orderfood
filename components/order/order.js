var order=Vue.extend({
    template:"#order",
    data:function(){
        return {
            msg:"<我的订单",
            contents:[
                {
                    pic:"img/order0.jpg",
                    intro:"【幸福味蕾】菲力牛排",
                    price:"￥79"
                },
                {
                    pic:"img/order1.jpg",
                    intro:"【真湘菜馆】乡间美味麻辣田螺",
                    price:"￥38"
                },
                {
                    pic:"img/order2.jpg",
                    intro:"【思维·特】纯正奶香丝滑泡芙",
                    price:"￥35×3"
                },
                {
                    pic:"img/order3.jpg",
                    intro:"【思维·特】一朵花一杯茶之菊花茶",
                    price:"￥28×2"
                },
                {
                    pic:"img/order4.jpg",
                    intro:"【粥末】健康营养红枣枸杞香粥",
                    price:"￥30×2"
                }
            ]
        };
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
        del:function(i){
            if(!confirm("确定真的取消吗？")) return;
            this.contents.splice(i,1);
        }
    }
});
Vue.component("order",order);
