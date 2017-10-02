var MongoClient=require('mongodb').MongoClient;
var querystring=require('querystring');
var DB_STR="mongodb://localhost:27017/seller-data";

var options = {  
    server: {
        auto_reconnect: true,
        poolSize: 10
    }
};

var Login={
    insertUser:function(req,res){
        var qStr="";
        req.addListener('data',function(dataPart){
            qStr+=dataPart;
        })
        req.addListener('end',function(){
            var obj=JSON.parse(qStr);
            obj.usertype='client';
            MongoClient.connect(DB_STR,options,function(err,db){
                if(err){console.log(err);return;}
                // console.log('连接成功啦');
                var collection=db.collection('user');
                collection.insert(obj,function(err,result){
                    res.end('1');
                    db.close();
                })
            })
        })
    },
    getUser:function(req,res){
        var qStr="";
        req.addListener('data',function(dataPart){
            qStr+=dataPart;
        })
        req.addListener('end',function(){
            var obj=JSON.parse(qStr);
            MongoClient.connect(DB_STR,options,function(err,db){
                if(err){console.log(err);return;}
                // console.log('连接成功啦');
                var collection=db.collection('user');
                collection.find(obj).toArray(function(err,result){
                    if(result.length!=0){   
                        db.collection('curuser').drop(); 
                        db.collection('curuser').insert(result,function(err,result1){
                        });
                        res.end(JSON.stringify(result));  //找到
                    }else{
                        res.end('0');  //没找到
                    }
                    db.close();
                });
            })
        })
    },
    getCurUser:function(req,res){
        req.addListener('data',function(dataPart){
        })
        req.addListener('end',function(){
            MongoClient.connect(DB_STR,options,function(err,db){
                if(err){console.log(err);return;}
                var collection=db.collection('curuser');
                collection.find().toArray(function(err,result){
                    res.end(JSON.stringify(result));
                    db.close();
                });
            })
        })
    },
    updateUser:function(req,res){
        var qStr="";
        req.addListener('data',function(dataPart){
            qStr+=dataPart;
        })
        req.addListener('end',function(){
            // console.log(JSON.parse(qStr));
            var obj=JSON.parse(qStr);
            MongoClient.connect(DB_STR,options,function(err,db){
                if(err){console.log(err);return;}
                // console.log('连接成功啦');
                var collection=db.collection('user');
                collection.update({'username':obj.username},{$set:{'username':obj.username,'password':obj.password,'sex':obj.sex,'address':obj.address,'tel':obj.tel,}},false,true,function(result){
                    res.end(result);
                    db.close();
                });
            })
        })
    }
}

module.exports=Login;


// db.user.insert({
//     username:'爵士牛排',
//     password:'jueshiniupai',
//     seller_id:'01',
//     usertype:'seller'
// })
// db.user.insert({
//     username:'水煮江川',
//     password:'shuizhujiangchuan',
//     seller_id:'02',
//     usertype:'seller'
// })
// db.user.insert({
//     username:'粥末',
//     password:'zhoumo',
//     seller_id:'03',
//     usertype:'seller'
// })
// db.user.insert({
//     username:'真湘菜馆',
//     password:'zhenxiangcaiguan',
//     seller_id:'04',
//     usertype:'seller'
// })
// db.user.insert({
//     username:'思维特',
//     password:'siweite',
//     seller_id:'05',
//     usertype:'seller'
// })

