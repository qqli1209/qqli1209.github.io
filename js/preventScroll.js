$(function(){
    function preventDefault(e) {
        if (e.preventDefault){
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
    var baiduMap = $("#contact");
    baiduMap.addEventListener('DOMMouseScroll', preventDefault, false);
    baiduMap.onwheel = preventDefault; // modern standard
    baiduMap.onmousewheel = preventDefault; // older browsers, IE
});