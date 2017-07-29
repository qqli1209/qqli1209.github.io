$(function(){
    function preventDefault(e) {
        if (e.preventDefault){
            e.preventDefault();
        }
        e.returnValue = false;  
    }
    var baiduMap = document.getElementById("contact");
    function disableScroll(ele) {
        if (ele.addEventListener) {// older FF
            ele.addEventListener('DOMMouseScroll', preventDefault, false);
        }
        ele.onwheel = preventDefault; // modern standard
        ele.onmousewheel = preventDefault; // older browsers, IE
    }
    disableScroll(baiduMap);
});