
$(function(){
	$(".top-nav ul ul li a").hover(function(){
		//the parent li should also act like it is selected
		$(this).parent().parent().parent().find("a").first().addClass("selected");
	},function(){
		//remove the parent li selected class
		$(this).parent().parent().parent().find("a").first().removeClass("selected");
	});

	// hover on header-log, the foregroung and background move in opposite direction
	var back = $("div.header");
	var fore = $("div.foreground");
	var skew = 50;
	$(".header-logo h1 a").hover(function(){
		var b = back.css("backgroundPosition").split(" ");
		var f = fore.css("backgroundPosition").split(" ");
		var backNewPos = (parseInt(b[0])+skew) + "%";
		var foreNewPos = (parseInt(f[0])-skew) + "%";
		//alert(newPosition);
		if(!back.is(":animated")){
			back.animate({"background-position-x":backNewPos},8000);
			fore.animate({"background-position-x":foreNewPos},8000);
		}
	})

})
