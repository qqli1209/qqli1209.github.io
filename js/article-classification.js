



$(function(){
	var article = $("article");
	var article_js = $("article.js");
	var article_html = $("article.html");
	var article_css = $("article.css");

	$(".html-article").click(function(){
		event.stopPropagation();
		article.hide();
		article_html.show();
	});
	$(".js-article").click(function(){
		event.stopPropagation();
		article.hide();
		article_js.show();
	});
	$(".css-article").click(function(){
		event.stopPropagation();
		article.hide();
		article_css.show();
	});
});