
		function startTime(){
                var today=new Date();//定义日期对象     
                var yy = today.getFullYear();//通过日期对象的getFullYear()方法返回年      
                var MM = today.getMonth()+1;//通过日期对象的getMonth()方法返回年      
                var dd = today.getDate();//通过日期对象的getDate()方法返回年       
                var hh=today.getHours();//通过日期对象的getHours方法返回小时     
                var mm=today.getMinutes();//通过日期对象的getMinutes方法返回分钟     
                var ss=today.getSeconds();//通过日期对象的getSeconds方法返回秒     
                // 如果分钟或小时的值小于10，则在其值前加0，比如如果时间是下午3点20分9秒的话，则显示15：20：09     
                MM=checkTime(MM);  
                dd=checkTime(dd);  
                mm=checkTime(mm);     
                ss=checkTime(ss);   
                /*   
                var day; //用于保存星期（getDay()方法得到星期编号）  
                if(today.getDay()==0)   {day = "星期日 " ;}  
                if(today.getDay()==1)   {day = "星期一 " ;}  
                if(today.getDay()==2)   {day = "星期二 " ;}  
                if(today.getDay()==3)   {day = "星期三 " ;}  
                if(today.getDay()==4)   {day = "星期四 " ;}  
                if(today.getDay()==5)   {day = "星期五 " ;}  
                if(today.getDay()==6)   {day = "星期六 " ;}
                */
                document.getElementById('nowTime').innerHTML=
                yy+"-"+MM +"-"+ dd +" " + hh + ":" + mm + ":" + ss;
                setTimeout('startTime()',1000);//每一分钟重新加载startTime()方法  
        }     
              
       function checkTime(t){     
            if (t<10){  
                t= "0" + t;  
            }     
            return t;  
        }    
        
$(function(){
	startTime();
});













