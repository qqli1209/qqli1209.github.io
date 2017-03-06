

const ARTICLE_PER_PAGE = 8;
//pageLink.eq(1).click();

$(function(){
    //
    //var articles = $("#myArticles").find("article");
    //console.log(articles.length);
    //console.log(ARTICLE_PER_PAGE);  //8
    var pageLink = $("#pageNav").find("li");
    
    var len = pageLink.length;
    //console.log(len);
    
    for(var i=0; i<len; i++){
        pageLink.eq(i).click(function(){
            //console.log(i);
            $(this).find("a").addClass("pageSelected");
            $(this).siblings().find("a").removeClass("pageSelected");
        });
    }
    
    pageLink.eq(1).click(function(){
        $("article").show();
        $("article:gt(7)").hide();
    });
    pageLink.eq(2).click(function(){
        $("article").show();
        $("article:gt(15)").hide();
        $("article:lt(8)").hide();
    });
    pageLink.eq(3).click(function(){
        $("article").show();
        $("article:gt(23)").hide();
        $("article:lt(16)").hide();
    });
    pageLink.eq(4).click(function(){
        $("article").show();
        $("article:gt(31)").hide();
        $("article:lt(24)").hide();
    });
    pageLink.eq(1).click();
});
