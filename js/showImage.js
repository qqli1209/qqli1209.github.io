




$(function(){
	var x = 10;
	var y = 20;
	$(".flex-column img").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";
		var bigimg = "<div id = 'bigimg'><img src = '" + this.myTitle + "' alt = '预览图'/>"+"<\/div>";
		$("body").append(bigimg);
		$("#bigimg").css({
			"top" : (e.pageY+y)+"px",
			"left" : (e.pageX+x)+"px"}).show("fast");
			console.log($("#bigimg"));
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#bigimg").remove();
	}).mousemove(function(e){
		$("#bigimg").css({
			"top" : (e.pageY+y)+"px",
			"left" : (e.pageX+x)+"px"});
	});

});









