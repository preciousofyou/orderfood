var http=require('http');
var route=require('./route.js');
var sellerData=[
	{
		seller_pic:'images/foods/webp1.jpg',  //商家头像
		seller_name:'爵士牛排', //商家名称
		seller_intro:'只有你想不到，没有我们做不到，美味尽在爵士牛排', //商家简介
		seller_acti:'全场满10减2', //商家活动（全场几折）
		seller_notice:'开张大吉，生意兴隆',      //商家公告
		start_price:'¥10', //起步价
		delivery_fee:'¥3',  //配送费
		delivery_time:'45', //配送时间（周几到周几，几点到几点）
		seller_sales:'4565', //月销售量
		seller_address:'3434', //商家地址
		seller_foods:[  //菜品
			{
				seller_name:'爵士牛排', //商家名称
				food_name:'rtwer', //名字
				food_old_price:'wer',  //原价
				food_price:'wre', //价格
				food_sales:'wer',  //月销售量
				food_pic:'try',   //菜图
				food_intro:'rty'  //菜简介
 			},    
			{},
			{},
			{},
			{},
			{},
			{}
		]
	},
	{
		seller_pic:'images/foods/webp2.jpg',  //商家头像
		seller_name:'江湖麻辣烫', //商家名称
		seller_intro:'只有你想不到，没有我们做不到，美味尽在爵士牛排', //商家简介
		seller_acti:'43452342', //商家活动（全场几折）
		seller_notice:'234232',      //商家公告
		start_price:'453453', //起步价
		delivery_fee:'778678',  //配送费
		delivery_time:'865786', //配送时间（周几到周几，几点到几点）
		seller_sales:'5887', //月销售量
		seller_address:'578', //商家地址
		seller_foods:[  //菜品
			{
				seller_name:'5675', //商家名称
				food_name:'546', //名字
				food_price:'3636', //价格
				food_sales:'345',  //月销售量
				food_pic:'679',   //菜图
				food_intro:'645634'  //菜简介
 			},    
			{},
			{},
			{},
			{},
			{},
			{}
		]
	},
	{
		seller_pic:'images/foods/webp3.jpg',  //商家头像
		seller_name:'粥末', //商家名称
		seller_intro:'只有你想不到，没有我们做不到，美味尽在爵士牛排', //商家简介
		seller_acti:'43452342', //商家活动（全场几折）
		seller_notice:'234232',      //商家公告
		start_price:'453453', //起步价
		delivery_fee:'778678',  //配送费
		delivery_time:'865786', //配送时间（周几到周几，几点到几点）
		seller_sales:'5887', //月销售量
		seller_address:'578', //商家地址
		seller_foods:[  //菜品
			{
				seller_name:'5675', //商家名称
				food_name:'546', //名字
				food_price:'3636', //价格
				food_sales:'345',  //月销售量
				food_pic:'679',   //菜图
				food_intro:'645634'  //菜简介
 			},    
			{},
			{},
			{},
			{},
			{},
			{}
		]
	},
	{
		seller_pic:'images/foods/webp4.jpg',  //商家头像
		seller_name:'思维特', //商家名称
		seller_intro:'只有你想不到，没有我们做不到，美味尽在爵士牛排', //商家简介
		seller_acti:'43452342', //商家活动（全场几折）
		seller_notice:'234232',      //商家公告
		start_price:'453453', //起步价
		delivery_fee:'778678',  //配送费
		delivery_time:'865786', //配送时间（周几到周几，几点到几点）
		seller_sales:'5887', //月销售量
		seller_address:'578', //商家地址
		seller_foods:[  //菜品
			{
				seller_name:'5675', //商家名称
				food_name:'546', //名字
				food_price:'3636', //价格
				food_sales:'345',  //月销售量
				food_pic:'679',   //菜图
				food_intro:'645634'  //菜简介
 			},    
			{},
			{},
			{},
			{},
			{},
			{}
		]
	},
	{
		seller_pic:'images/foods/webp5.jpg',  //商家头像
		seller_name:'湘菜', //商家名称
		seller_intro:'只有你想不到，没有我们做不到，美味尽在爵士牛排', //商家简介
		seller_acti:'43452342', //商家活动（全场几折）
		seller_notice:'234232',      //商家公告
		start_price:'453453', //起步价
		delivery_fee:'778678',  //配送费
		delivery_time:'865786', //配送时间（周几到周几，几点到几点）
		seller_sales:'5887', //月销售量
		seller_address:'578', //商家地址
		seller_foods:[  //菜品
			{
				seller_name:'5675', //商家名称
				food_name:'546', //名字
				food_price:'3636', //价格
				food_sales:'345',  //月销售量
				food_pic:'679',   //菜图
				food_intro:'645634'  //菜简介
 			},    
			{},
			{},
			{},
			{},
			{},
			{}
		]
	}
];

http.createServer(function(req,res){
	if(/favicon.ico/.test(req.url)) {
		res.end();return;
	}
	// res.write('123');
	res.writeHeader(200,{
		// 'Set-Cookie':["username=route.username","password=route.password"],
		'Access-Control-Allow-Origin':'*',
		'Access-Control-Allow-Headers':'Content-Type',
		'Access-Control-Allow-Methods':'POST,GET,PUT,DELETE,OPTIONS'
	});
	if(req.method=='OPTIONS') {res.end();return;}
	route(req,res);

}).listen(8080);

console.log('server is running at 8080 port...');
