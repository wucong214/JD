$(function(){
	/*1F 衣服鞋包tab选项卡切换效果开始*/
	$(".rtit li").first().children("span").css("display","none");
	$(".rtit li").mouseover(function(){
		var n=$(this).index();
		$(this).addClass("select").siblings().removeClass("select");
		$(this).children("a").css("color","#c81623").end().siblings().children().css("color","#666");
		$(this).children("span").css("display","none").end().siblings().children("span").css("display","inline-block");
		if(n>0){
			$(this).siblings().eq(n-1).children("span").css("display","none");
		}
	})
	/*1F 衣服鞋包tab选项卡切换效果结束*/
})