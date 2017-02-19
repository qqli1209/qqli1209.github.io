
$(function(){
	$(".top-nav ul ul li a").hover(function(){
		//the parent li should also act like it is selected
		$(this).parent().parent().parent().find("a").first().addClass("selected");
	},function(){
		//remove the parent li selected class
		$(this).parent().parent().parent().find("a").first().removeClass("selected");
	})
})
