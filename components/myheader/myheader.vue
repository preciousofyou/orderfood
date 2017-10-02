<template id="myheader">
	<div class="myheader common">
		<div class="container">
			<div class="search">
				<input type="search" placeholder="商家，美食">
				<input type="button" value="搜索">
			</div>
			<div class="login">
				<a href="#">登录</a>
				<a href="">注册</a>
			</div>
		</div>
	</div>
</template>
<script>
	var myheader=Vue.extend({
		template:'#myheader'
	});
	Vue.component('myheader',myheader);
</script>

<style>
	.myheader{
		height: 60px;
	}
	.myheader>.container{position:relative;}
	.myheader>.container>.search{
		width: 300px;
		height: 30px;
		background-color: rgba(214,187,187,.3);
		position:absolute;
		top:15px;
		right:250px;
		box-shadow: 1px 1px 1px 1px	 #969898;
	}
	.myheader>.container>.search>input{
		height: 100%;
		border:0;
		background:transparent;
	}
	.myheader>.container>.search>input:first-child{
		width: 240px;
		text-indent: 10px;
	}
	.myheader>.container>.search>input:last-child{
		float: right;
		margin-right: 10px;
		color: #fff;
		font: bold 16px/30px '微软雅黑';
		cursor: pointer;
	}
	.myheader>.container>.search>input:last-child:hover{
		color:#8b7948;
	}
	.myheader>.container>.login{
		width: 100px;
		height: 30px;
		position: absolute;
		right:100px;
		top:15px;
		font-size:0;
	}
	.myheader>.container>.login>a{
		display: inline-block;
		width: 50px;
		height: 100%;
		font: bold 16px/30px '微软雅黑';
		text-align: center;
		color:#000;
		text-shadow: 1px 1px 2px 1px #000;
	}
	/*.myheader>.container>.login>a:first-child{
		
	}*/
</style>