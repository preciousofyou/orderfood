

var Seller=require('./sellerRoute.js');
var Login=require('./loginRoute.js');
// var Seller=require('./sellerRoute.js');

function route(req,res){
    var reg=/^\/(\w+)\/(\w+)/;
    var result=req.url.match(reg);
    switch(result[1]){
		case 'seller':
			Seller[result[2]](req,res);
			break;
		case "login":
			Login[result[2]](req,res);
			break;
		default:break;
	}
}

module.exports=route;


//seller-data里面有user和seller