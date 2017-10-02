var MongoClient=require('mongodb').MongoClient;
var DB_STR="mongodb://localhost:27017/seller-data";
//use seller-data 


var options = {  
    server: {
        auto_reconnect: true,
        poolSize: 10
    }
};

var Seller={
    getSeller:function(req,res){
        req.addListener('data',function(dataPart){
        })
        req.addListener('end',function(){
            MongoClient.connect(DB_STR,function(err,db){
                if(err){console.log(err);return;}
                var collection=db.collection('seller');
                collection.find().toArray(function(err,result){
                    // console.log(result);
                    res.end(JSON.stringify(result));
                    db.close();
                });
            })
        })
    },
    addSellerFood:function(req,res){
        var qStr="";
        req.addListener('data',function(dataPart){
            qStr+=dataPart;
        })
        req.addListener('end',function(){
            var obj=JSON.parse(qStr);   //某个商家的所有菜品 seller_foods=[]
            MongoClient.connect(DB_STR,options,function(err,db){
                if(err){console.log(err);return;}
                var collection=db.collection('seller');
                collection.update({'seller_id':obj[1].seller_id},{$set:{'seller_foods':obj}},function(result){
                    res.end('1');  //成功
                    db.close();
                });
            })
        })
    },
    delSellerFood:function(req,res){
        var qStr="";
        req.addListener('data',function(dataPart){
            qStr+=dataPart;
            // console.log(qStr);
        })
        req.addListener('end',function(){
            var obj=JSON.parse(qStr);   //某个商家的所有菜品 seller_foods=[]

            MongoClient.connect(DB_STR,options,function(err,db){
                if(err){console.log(err);return;}
                var collection=db.collection('seller');
                collection.update({'seller_id':obj[1].seller_id},{$set:{'seller_foods':obj}},function(result){
                    res.end('1');  //成功
                    db.close();
                });

                
            })
        })
    }
}


module.exports=Seller;



