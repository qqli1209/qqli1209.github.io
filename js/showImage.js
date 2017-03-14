




$(function(){
	var x = 10;
	var y = 20;
	/*
	function throttle(method,delay,duration){
        var timer=null, begin=new Date();
        return function(){
            var context=this, args=arguments, current=new Date();;
            clearTimeout(timer);
            if(current-begin>=duration){
                method.apply(context,args);
                begin=current;
            }else{
                timer=setTimeout(function(){
                    method.apply(context,args);
                },delay);
            }
        }
	}
	function handlemove(e){
		$("#bigimg").css({
			"top" : (e.pageY+y)+"px",
			"left" : (e.pageX+x)+"px"});
	}
	*/
	//预加载图片


	$(".flex-column img").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";
		var bigimg = "<div id = 'bigimg'><img src = '" + this.myTitle + "' alt = '预览图'/>"+"<\/div>";
		$("body").append(bigimg);
		$("#bigimg").css({
			"top" : (e.pageY+y)+"px",
			"left" : (e.pageX+x)+"px"}).fadeIn("fast");
			console.log($("#bigimg"));
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#bigimg").remove();
	}).mousemove(function(e){
		console.log(e.pageY);
		$("#bigimg").css({
			"top" : (e.pageY+y)+"px",
			"left" : (e.pageX+x)+"px"});
	});
	var images = new Array();
        function preload() {
            for (i = 0; i < preload.arguments.length; i++) {
                images[i] = new Image()
                images[i].src = preload.arguments[i];
                document.getElementById("image-container").appendChild(images[i]);
            }
        }
        preload(
            "../images/icons/backToHomeAfter.png",
            "../images/icons/backToTopAfter.png",
            "../images/icons/head-hover.png"
        );
});









