/*
----------------------------
-Click on the Button Join !-
----------------------------
*/
    var t = 0;
    // 加载平移动画效果
    function join_1() {
    if(t == 0){  
        // 外标题的平移距离
    	document.querySelectorAll('.cont_letras > p')[0].style.left = '260px';
    	document.querySelectorAll('.cont_letras > p')[1].style.left = '-320px';
    	document.querySelectorAll('.cont_letras > p')[2].style.left = '260px';
    	setTimeout(function(){
        	document.querySelector('.cont_join').className = 'cont_join cont_join_form_act';
            },1000);    
        	t++;
        }
            // 内标题的消失距离
        else{
        	t++;            
        	document.querySelector('.cont_form_join').style.bottom = '-520px';
        	setTimeout(function(){               
        		document.querySelector('.cont_join').className = 'cont_join cont_join_form_act cont_join_finish';
        	    },500);
          	}
            $("#cont_btn_join1").css("display","none");
    }


/*
--------------
-用户验证部分-
--------------
*/

    // $("#username").blur(function() {
    //     // 判断用户名输入是否为空
    //     if($("#username").val() == ""){
    //         $("#l3").append("<br><font color='red' size='1px'>请输入用户名</font>");
    //     }

    // });
    //     // 隐藏输入用户名提示
    // $("#username").focus(function(){
    //     $("#l3").empty();
    // });

/*
--------------
-密码验证部分-
--------------
*/

    // $("#password").blur(function() {
    //     // 判断密码输入是否为空
    //     if($("#password").val() == ""){
    //         $("#l2").append("<br><font color='red' size='1px'>请输入密码</font>");
    //     }

    // });
    //     // 隐藏输入密码提示
    // $("#password").focus(function(){
    //     $("#l2").empty();
    // });

/*
------------
-验证码部分-
------------
*/

    //验证验证码
    function confirmCode(data){
        var oValue = $("#in1").val().toUpperCase();  
            $("#l1").html(""); 

            if(oValue ==""){  
                $("#l1").html("<br><font color='red' size='1px'>请输入验证码</font>");  
                return false;
            }
            else if(oValue != data){

                $("#l1").html("<br><font color='red' size='1px'>验证码不正确,请重新输入</font>");  
                oValue = "";  
                createCode();
                return false;
            }
            else
                $("#l1").html("<br><font color='blue' size='1px'>验证码正确</font>");  
                return true;
    }
    //创建验证码
    function createCode(){  
        var code = '';              //首先默认code为空字符串  
        var codeLength = 4;         //设置长度，这里看需求，我这里设置了4  
         
                                    //设置随机字符  
        var random = new Array(0,1,2,3,4,5,6,7,8,9,
            'A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','O','P','Q','R', 'S','T',
            'U','V','W','X','Y','Z'); 
                                    //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){ 
                                    //设置随机数范围,这设置为0 ~ 36(数字+英文总数) 
            var index = Math.floor(Math.random()*36);    
            code += random[index];  //字符串拼接 将每次随机的字符 进行拼接  
        }  
           return code;
    }  

    
    var getData={};
    $(document).ready(function() { 
            var code;               //定义验证码
            var codeV = $("#yzm");                         
            code = createCode();
            codeV.text(code);       //将拼接好的字符串赋值给展示的Value  

            //页面开始加载验证码  
            createCode();  
            //验证码yzm加载点击事件  
            $("#yzm").bind('click',function() { 
                createCode();  
            });  
                  
    //判断验证码是否==
            $("#b1").bind('click',function() {
               //通过调用    
            }); 
            var userdata={};
            
            $("#login").submit(function(event){
                if($("#username").val() == "" || $("#password").val() == "" || !confirmCode(code)){

                    if($("#username").val() == ""&&$("#password").val() == ""){
                        alert('请输入用户名和密码');
                    }else if($("#username").val() == ""){
                        alert("用户名不能为空");
                    }else if($("#password").val() == ""){
                        alert("密码不能为空");
                    }
                    if(!confirmCode(code)){
                        alert("验证码不准确");    
                    }  
                    return false;
                }else{    
                   
                    userdata.username=$("#username").val();
                    userdata.password=$("#password").val();
                   
                    // $.cookie('username',$("#username").val(),{expires:7});
                    // $.cookie('password',$("#password").val(),{expires:7});

                    
                    $.ajax({
                        url:'http://localhost:8080/login/getUser',  
                        type:'POST',
                        data: JSON.stringify(userdata),
                        async:false,
                        // dataType:'text',
                        success:function(result){
                            getData=JSON.parse(result);
                        },
                        error:function(){
                            alert('错误');
                        }    

                    });  
                    // cookieUtil.set('username',userdata.username);
                    // cookieUtil.set('password',userdata.password);

                    if(getData&&getData.length!=0){
                        alert('登陆成功');
                        // location.href="../index.html?"+"txt="+encodeURI(JSON.stringify(getData));
                        // window.location.replace('./index.html');
                        // return false;
                        return true;
                        
                    }else if(getData=='0'){
                        alert('密码错误');
                    }else{
                        return false;
                    }
                    return false;
                } 
            });
        });

        
        
        // var oDate=new Date();
        // oDate.setDate(oDate.getDate()+5);
        // document.cookie="username="+userdata.username+"+;expires="+oDate.toGMTString();
        // document.cookie="password="+userdata.password+"+;expires="+oDate.toGMTString();

        // setCookie("username",userdata.username,14);
        // setCookie("password",userdata.password,14);
        // cookie_text += "; expires=" + new Date().toGMTString(); 