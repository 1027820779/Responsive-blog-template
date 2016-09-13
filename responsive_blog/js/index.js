$(function(){
	var c=true;
	$(".slide-control").click(function(){
		$(".nav-box").slideToggle("slow");
		c=false;
	});
	//如果大于768，把行内样式去掉
	//浏览器当前窗口文档对象宽度
	$(window).resize(function(){
		var width=$(document).width();
		if(!c){
			if(width>768){
				$(".nav-box").removeAttr("style");
			}
		}
	});
	
	//点击消失公告
	$(".close-msg").click(function(){
		$(".msg").css({display:'none'});
	});
	
	//点击消失最热文章,最新评论
	$(".remove").click(function(){
		$(this).parents(".wr").css({display:"none"});
	});
	
	//点击隐藏最热文章列表，最新评论列表
	var n=true;
	$(".itogle").click(function(){
		var th=$(this);
		$(this).parents(".ti").next().slideToggle("slow",function(){
			if(n){
				th.removeAttr("class").attr("class","fa panel-toggle fa-chevron-circle-down itogle");
				n=false;
			}else{
				th.removeAttr("class").attr("class","fa fa-chevron-circle-up panel-toggle itogle");
				n=true;
			}
			
		});
	});



			
});

