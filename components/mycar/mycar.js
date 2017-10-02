var mycar=Vue.extend({
    template:"#myCar",
    data:function(){
        return{
            msg:"购物车",
            headers:["选择","商品详情","价格","数量","计总","操作"],
            items:[],
            isShow:false
        }
    },
    computed:{
        sumPrice:function(){
            var data=000;
            this.items.forEach(function(v){
                if(v.selected){
                    data+=v.totalPrice;
                }
            });
            return data;
        }
    },
    created:function(){
        this.items=[
                {
                    pic:"img/myCar0.jpg",
                    intro:"【真湘菜馆】麻辣鸭舌，正宗地道又美味",
                    num:2,
                    price: 79,
                    oldPrice:99,
                    totalPrice:158,
                    selected:false
                },
                {
                    pic:"img/myCar1.jpg",
                    intro:"【重庆麻辣面馆】酸辣米粉，好面还要配好汤，正宗酸爽麻辣",
                    num:1,
                    price: 18,
                    oldPrice:109,
                    totalPrice: 89,
                    selected:false
                },
                {
                    pic:"img/myCar2.jpg",
                    intro:"【幸福味蕾】鲜虾披萨，虾多味美，口感丝滑",
                    num:1,
                    price: 89,
                    oldPrice:109,
                    totalPrice: 89,
                    selected:false
                },
                {
                    pic:"img/myCar3.jpg",
                    intro:"【XXXXX】卡空间都外径大 几大美丽看电脑 万恶米的辣妈 klmeda",
                    num:1,
                    price: 134,
                    oldPrice:159,
                    totalPrice: 89,
                    selected:false
                }
        ]
    },
    methods:{
        down:function(i){
            if(this.items[i].num==1) return;
            this.items[i].num--;
            this.items[i].totalPrice=this.items[i].price*this.items[i].num;
        },
        up:function(i){
            this.items[i].num++;
            this.items[i].totalPrice=this.items[i].price*this.items[i].num;
        },
        choice:function(){
            // console.log($(".checkbox:checked").length);
            if($(".checkbox:checked").length==$(".checkbox").length){
                $("#checkAll").prop("checked",true);
            }else{
                $("#checkAll").prop("checked",false);
            }
        },
        checkAll:function(){
            var flag=$("#checkAll").prop("checked");
            this.items.forEach(function(v){
                if(flag==true)
                    v.selected=true;
                else
                    v.selected=false;
            });
        },
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
            if(!confirm("确认删除吗？")) return;
            this.items.splice(i,1);
        },
        mypay:function(){
            if(this.sumPrice==0){
                alert("请选择商品！！！");
                return;
            } 
            this.isShow=true;
        },
        closeWindow:function(){
            this.isShow=false;
        }
    }
});
Vue.component("mycar",mycar);