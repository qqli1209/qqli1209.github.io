

const ARTICLE_PER_PAGE = 8;

//按用户点击pageLink,显示网页文章articles
function showArticle(articles,pageLink){
    var len = pageLink.length;
    for(let j=1; j<len-1; j++){
        pageLink.eq(j).click(function(){
            $(this).addClass("flag").siblings().removeClass("flag");
            articles.hide();
            for(var page = ARTICLE_PER_PAGE*(j-1);page< ARTICLE_PER_PAGE*j; page++){
                articles.eq(page).show();
            }
        });
    }
}


$(function(){
    var articles = $("article");
    var pageLink = $("#pageNav").find("li");
    var pageA = $("#pageNav");
    var len = pageLink.length;
    //console.log(len);
    
    for(var i=0; i<len; i++){
        pageLink.eq(i).click(function(){
            //console.log(i);
            $(this).find("a").addClass("pageSelected");
            $(this).siblings().find("a").removeClass("pageSelected");
        });
    }
    showArticle(articles,pageLink);

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
});
