$(function(){
        var result = document.getElementById("result");

        //输入框右上角叉号样式变化
        $(".cha").hover(function(){
            $(this).removeClass("icon-cha3").addClass("icon-cha2");
        },function(){
            $(this).removeClass("icon-cha2").addClass("icon-cha3");
        });

        //点击叉号，清除框的内容
        $(".cha").click(function(){
            $("#query").val("");
            result.innerHTML = "";
        });

        //点击输入框，改变边框样式
        $("body").click(function(){
            $(".textarea-wrap").removeClass("textarea-wrap-focus");
        });
        $(".textarea-wrap").click(function(e){
            $(this).addClass("textarea-wrap-focus");
            e.stopPropagation();
        });

        //更换src,dst 语言
        var from = 'en';
        var to = 'zh';
        $(".exchange").click(function(){
            var temp = from;
            from = to;
            to = temp;
            temp = document.getElementById("src-language").innerHTML;
            document.getElementById("src-language").innerHTML = document.getElementById("dst-language").innerHTML;
            document.getElementById("dst-language").innerHTML = temp;
        });
  
        //get translation
        var appid = '2015063000000001';
        var key = '12345678';
        var salt = (new Date).getTime();
        //var query = 'apple\norange\nbanana\npear\nabandon';
        // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
        
        $("#query").keyup(function(event){
            if(event.keyCode ==13){
                $("#submit").trigger("click");
            }
        });

        $("#submit").click(function(){
            var query = document.getElementById("query").value;
            //var query = "apple";
            var str1 = appid + query + salt +key;
            var sign = MD5(str1);
            $.ajax({
                url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
                type: 'get',
                dataType: 'jsonp',
                data: {
                    q: query,
                    appid: appid,
                    salt: salt,
                    from: from,
                    to: to,
                    sign: sign
                },
                success: function (data) {
                    //console.log(data);
                    //console.log(data.trans_result[0].dst);
                    result.innerHTML = data.trans_result[0].dst;
                } 
            });
        });
    });