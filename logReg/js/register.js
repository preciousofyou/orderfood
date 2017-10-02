$(function(){
    // $('#user').val()
    // $('#pass').val()
    // $('input:radio:checked').val()
    // $('#address').val()
    // $('#tel').val()
    $("#wizard").scrollable({
		onSeek: function(event,i){
			$("#status li").removeClass("active").eq(i).addClass("active");
		},
		onBeforeSeek:function(event,i){
			if(i==1){
				var user = $("#user").val();
				if(user==""){
					alert("用户名不能为空哦~");
					return false;
				}
				var pass = $("#pass").val();
				var pass1 = $("#pass1").val();
				if(pass==""){
				    alert("密码不能为空哦~");
					return false;
				}
				if(pass1 != pass){
				    alert("两次密码不一致~");
					return false;
				}
			}
		}
	});
    // document.cookie="username="+$('#user').val();
    // document.cookie="password="+$('#pass').val();
    // $('#sub').click(function(){
    //     alert(document.cookie);
    // });
    var userData={};
    $('#sub').click(function(){
        // alert($('#user').val()+$('#pass').val()+$('input:radio:checked').val()+$('#address').val()+$('#tel').val());
        
        userData.username=$('#user').val();
        userData.password=$('#pass').val();
        userData.sex=$('input:radio:checked').val();
        userData.address=$('#address').val();
        userData.tel=$('#tel').val();

        // console.log(userData);

        $.ajax({
            url:'http://localhost:8080/login/insertUser',  //getsellerData时从服务器获得商家总信息
            type:'POST',
            data: JSON.stringify(userData),
            success:function(data){
                if(data=='1'){
                    alert('注册成功');
                }
            },
            error:function(){
                alert('错误');
            }    
        });   //res.data接收数据
    });
   
})