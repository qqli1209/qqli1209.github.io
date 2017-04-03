$(function(){
$("#tempContainer").load("http:\\liqianqian.me\\database.html");
    //显示不同的文章
    var article = $("article");console.log(article.length);
    var article_js = $("#tempContainer article.js");
    var article_html = $("#tempContainer article.html");
    var article_css = $("#tempContainer article.css");
    var article_eassy = $("#tempContainer article.eassy");

    var pageLink = $("#pageNav").find("li");
    var pageA = $("#pageNav");
    var len = pageLink.length;
    //console.log(len);
const ARTICLE_PER_PAGE = 8;

//按用户点击pageLink,显示网页文章articles
function showArticle(articles,pageLink){
    var len = pageLink.length;
    for(let j=1; j<len-1; j++){
    	var curArticleText = "";
        pageLink.eq(j).click(function(){
            for(var page = ARTICLE_PER_PAGE*(j-1);page< ARTICLE_PER_PAGE*j; page++){
                curArticleText += articles.eq(page).innerHTML;
                //console.log(articles.eq(page).html());
            }
            //console.log("page",j,"clicked");
            //console.log(curArticleText);
        });

        $("#articleWrapper").innerHTML = curArticleText;
    }
}

    
    for(var i=0; i<len; i++){
        pageLink.eq(i).click(function(){
            //console.log(i);
            $(this).find("a").addClass("pageSelected");
            $(this).siblings().find("a").removeClass("pageSelected");
        });
    }
    showArticle(article,pageLink);

    //后退
    pageLink.eq(0).click(function(){
        //现在选中哪个
        var curPage = $("li.flag");
        //console.log(curPage.html());
        console.log(curPage.index());
        var index = curPage.index();
        if(index>1){
            pageLink.eq(index-1).click();
        } else {
            pageLink.eq(1).click();
        } 
    });

    //前进
    pageLink.eq(len-1).click(function(){
        //现在选中哪个
        var curPage = $("li.flag");
        //console.log(curPage.html());
        console.log(curPage.index());
        var index = curPage.index();
        if(index<len-2){
            pageLink.eq(index+1).click();
        } else {
            pageLink.eq(len-1).click();
        }
    });

    //进入页面默认点击page1
    pageLink.eq(1).click();

    
    $("#html-article").click(function(){
        event.stopPropagation();
        article.hide();
        article_html.show();
    });
    

    $("#js-article").click(function(){
        event.stopPropagation();
        article.hide();
        article_js.show();
    });
    $("#css-article").click(function(){
        event.stopPropagation();
        article.hide();
        article_css.show();
    });
    
    $("#eassy-article").click(function(){
        event.stopPropagation();
        article.hide();
        article_eassy.show();
    });
    $("#all-articles").click(function(){
        event.stopPropagation();
        pageLink.eq(1).click();
    });
    $("#front-end-articles").click(function(){
        article.show();
        article_eassy.hide();
    });
});

