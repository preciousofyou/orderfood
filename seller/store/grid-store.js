var specialListConfig=[
	[
		{namespaced:true},		
		{
			fields:[
				// {
				// 	id:'01-001',
				// 	src:'beef/00-001.jpg',
				// 	name:'煎蛋牛排',
				// 	price:48,
				// 	oldprice:58
				// },
				// {
				// 	id:'01-002',
				// 	src:'beef/00-002.jpg',
				// 	name:'中式西餐',
				// 	price:38,
				// 	oldprice:42
				// },
				// {
				// 	id:'01-003',
				// 	src:'beef/00-003.jpg',
				// 	name:'水果蛋糕',
				// 	price:58,
				// 	oldprice:69
				// },
				// {
				// 	id:'01-004',
				// 	src:'beef/00-004.jpg',
				// 	name:'水果夹心',
				// 	price:59,
				// 	oldprice:71
				// }
			]
		}
	],
	[
		{namespaced:true},
		{
			fields:[
				// {
				// 	id:'02-001',
				// 	src:'dish/00-001.jpg',
				// 	name:'粉丝鱿鱼',
				// 	price:68,
				// 	oldprice:72
				// },
				// {
				// 	id:'02-002',
				// 	src:'dish/00-002.jpg',
				// 	name:'五件头',
				// 	price:48,
				// 	oldprice:52
				// },
				// {
				// 	id:'02-003',
				// 	src:'dish/00-003.jpg',
				// 	name:'肉丁花菜',
				// 	price:38,
				// 	oldprice:40
				// },
				// {
				// 	id:'02-004',
				// 	src:'dish/00-004.jpg',
				// 	name:'蒜苗鱿鱼',
				// 	price:70,
				// 	oldprice:73
				// }
			]
		}
	]
];
var fastfoodConfig=[
	[
		{namespaced:true},
		{
			fields:[
					// {
					// 	id:'01-013',
					// 	src:'beef/01-001.jpg',
					// 	name:'红豆牛排',
					// 	price:68,
					// 	oldprice:75
					// },
					// {
					// 	id:'01-014',
					// 	src:'beef/01-002.jpg',
					// 	name:'香蕉牛排',
					// 	price:65,
					// 	oldprice:72
					// },
					// {
					// 	id:'01-015',
					// 	src:'beef/01-003.jpg',
					// 	name:'红酒牛排',
					// 	price:88,
					// 	oldprice:100
					// },
					// {
					// 	id:'01-016',
					// 	src:'beef/01-004.jpg',
					// 	name:'玉米牛排',
					// 	price:78,
					// 	oldprice:80
					// }
			]
		}
	],
	[
		{namespaced:true},
		{
			fields:[
				// {
				// 	id:'02-013',
				// 	src:'dish/01-001.jpg',
				// 	name:'花围青豆',
				// 	price:28,
				// 	oldprice:32
				// },
				// {
				// 	id:'02-014',
				// 	src:'dish/01-002.jpg',
				// 	name:'豆皮',
				// 	price:25,
				// 	oldprice:30
				// },
				// {
				// 	id:'02-015',
				// 	src:'dish/01-003.jpg',
				// 	name:'辣椒炒虾仁',
				// 	price:68,
				// 	oldprice:72
				// },
				// {
				// 	id:'02-016',
				// 	src:'dish/01-004.jpg',
				// 	name:'孔雀拼盘',
				// 	price:80,
				// 	oldprice:85
				// }
			]
		}
	]
];
var liaoliConfig=[ 
	[
		{namespaced:true},
		{
			fields:[
				// {
				// 	id:'01-025',
				// 	src:'beef/02-001.jpg',
				// 	name:'薯条牛排',
				// 	price:66,
				// 	oldprice:75
				// },
				// {
				// 	id:'01-026',
				// 	src:'beef/02-002.jpg',
				// 	name:'三只牛排',
				// 	price:60,
				// 	oldprice:65
				// },
				// {
				// 	id:'01-027',
				// 	src:'beef/02-003.jpg',
				// 	name:'百合牛排',
				// 	price:98,
				// 	oldprice:108
				// },
				// {
				// 	id:'01-028',
				// 	src:'beef/02-004.jpg',
				// 	name:'面条牛排',
				// 	price:48,
				// 	oldprice:54
				// }
			]
		}
	],
	[
		{namespaced:true},
		{
			fields:[
				// {
				// 	id:'02-025',
				// 	src:'dish/02-001.jpg',
				// 	name:'辣椒酱鸭',
				// 	price:45,
				// 	oldprice:50
				// },
				// {
				// 	id:'02-026',
				// 	src:'dish/02-002.jpg',
				// 	name:'出水芙蓉',
				// 	price:75,
				// 	oldprice:80
				// },
				// {
				// 	id:'02-027',
				// 	src:'dish/02-003.jpg',
				// 	name:'小炒猪耳',
				// 	price:50,
				// 	oldprice:52
				// },
				// {
				// 	id:'02-028',
				// 	src:'dish/02-004.jpg',
				// 	name:'温馨凉拌',
				// 	price:20,
				// 	oldprice:25
				// }
			]
		}
	]
];

var gridModule={
	namespaced:true,
	state:{
		grids:[]
	},
	modules:{
		specialList:{state:specialListConfig},
		fastfood:{state:fastfoodConfig},
		liaoli:{state:liaoliConfig}
	} 
};