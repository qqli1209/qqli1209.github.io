


var clock=document.getElementById("clock");
	var cxt=clock.getContext("2d");
	var colr=(200+Math.floor(Math.random()*55.99));
	var colg=(200+Math.floor(Math.random()*55.99));
	var colb=(200+Math.floor(Math.random()*55.99));
	
	function resetcolor(){
		colr=(200+Math.floor(Math.random()*55.99));
		colg=(200+Math.floor(Math.random()*55.99));
		colb=(200+Math.floor(Math.random()*55.99));
	}
	//设置点击改变颜色
	clock.onclick = resetcolor;
	function drawClock(){
	//获取时间
	var now=new Date();
	var hou=now.getHours();
	var min=now.getMinutes();
	var sec=now.getSeconds();
	var mec=now.getMilliseconds();
	
	//转换12小时进制
	hou=hou>12?hou-12:hou;
	//清空画布
	cxt.clearRect(0,0,100,100);
	//阴影
	cxt.fill();
	cxt.fillStyle="gray";
	cxt.beginPath();
	//context.arc(x,y,r,sAngle,eAngle,counterclockwise),x 坐标,y 坐标,半径,起始角,结束角
	//cxt.arc(270,260,205,0,Math.PI*2,true);
	cxt.arc(54,52,41,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();
	//表盘
	cxt.fill();
	cxt.fillStyle="white";
	cxt.beginPath();
	//cxt.arc(250,250,205,0,Math.PI*2,true);
	cxt.arc(50,50,41,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();
	//蓝色表盘（边框）
	cxt.strokeStyle="#dddddd"
	//context.lineWidth=number,当前线条的宽度，以像素计
	//cxt.lineWidth=10;
	cxt.lineWidth=2;
	cxt.beginPath();
	//cxt.arc(250,250,185,0,Math.PI*2,true);
	cxt.arc(50,50,37,0,Math.PI*2,true);
	cxt.closePath();
	cxt.stroke();
	cxt.strokeStyle="#"+colr.toString(16)+colg.toString(16)+colb.toString(16);
	//cxt.lineWidth=10;
	cxt.lineWidth=2;
	cxt.beginPath();
	//cxt.arc(250,250,200,0,Math.PI*2,true);
	cxt.arc(50,50,40,0,Math.PI*2,true);
	cxt.closePath();
	cxt.stroke();
	cxt.strokeStyle="#"+colr.toString(16)+colg.toString(16)+colb.toString(16);
	//cxt.lineWidth=3;
	cxt.lineWidth=0.6;
	cxt.beginPath();
	//cxt.arc(250,250,192,0,Math.PI*2,true);
	cxt.arc(50,50,38.4,0,Math.PI*2,true);
	cxt.closePath();
	cxt.stroke();
	cxt.strokeStyle="#"+(colr-100).toString(16)+(colg-100).toString(16)+(colb-100).toString(16);
	//cxt.lineWidth=5;
	cxt.lineWidth=1;
	cxt.beginPath();
	//cxt.arc(250,250,205,0,Math.PI*2,true);
	cxt.arc(50,50,41,0,Math.PI*2,true);
	cxt.closePath();
	cxt.stroke();
	//刻度（时分）
		//时刻度
		for(var i=0;i<12;i++){
			cxt.save();
			//cxt.lineWidth=5;
			cxt.lineWidth=1;
			cxt.strokeStyle="black";
			//设置原点
			//translate() 方法重新映射画布上的 (0,0) 位置
			//cxt.translate(250,250);
			cxt.translate(50,50);
			//设置旋转角度;
			cxt.rotate(30*i/180*Math.PI);
			cxt.beginPath();
			//开始一条路径，移动到位置 0,0。创建到达位置 x,y 的一条线
			//cxt.moveTo(0,180);
			cxt.moveTo(0,36);
			//开始一条路径，移动到位置 0,0。创建到达位置 x,y 的一条线：
			//cxt.lineTo(0,160);
			cxt.lineTo(0,32);
			cxt.closePath();
			cxt.stroke();
			cxt.restore();
		}
		//分刻度
		for(var i=0;i<60;i++){
			if(i%5!=0){
				cxt.save();
				//cxt.lineWidth=2;
				cxt.lineWidth=0.4;
				cxt.strokeStyle="black";
				//设置原点
				//cxt.translate(250,250);
				cxt.translate(50,50);
				//设置旋转角度;
				cxt.rotate(6*i/180*Math.PI);
				cxt.beginPath();
				//cxt.moveTo(0,175);
				cxt.moveTo(0,35);
				//cxt.lineTo(0,165);
				cxt.lineTo(0,33);
				cxt.closePath();
				cxt.stroke();
				cxt.restore();
			}
		}
	//指针（时分秒）
	//时针
	cxt.save();
	//cxt.lineWidth=12;
	cxt.lineWidth=2.4;
	cxt.strokeStyle="black";
	cxt.beginPath();
	//cxt.translate(250,250);
	cxt.translate(50,50);
	cxt.rotate((hou*30+min*0.5+180)/180*Math.PI);
	cxt.moveTo(0,0);
	//cxt.lineTo(0,90);
	cxt.lineTo(0,18);
	cxt.closePath();
	cxt.stroke()
	cxt.restore();
	//分针
	cxt.save();
	//cxt.lineWidth=5;
	cxt.lineWidth=1;
	cxt.strokeStyle="black";
	cxt.beginPath();
	//cxt.translate(250,250);
	cxt.translate(50,50);
	cxt.rotate((min*6+sec*0.1+180)/180*Math.PI);
	cxt.moveTo(0,0);
	//cxt.lineTo(0,130);
	cxt.lineTo(0,26);
	cxt.closePath();
	cxt.stroke()
	cxt.restore();
	//秒针
	cxt.save();
	//cxt.lineWidth=2;
	cxt.lineWidth=0.4;
	cxt.strokeStyle="red";
	cxt.beginPath();
	//cxt.translate(250,250);
	cxt.translate(50,50);
	cxt.rotate((sec*6+mec*0.006+180)/180*Math.PI);
	cxt.moveTo(0,0);
	//cxt.lineTo(0,150);
	cxt.lineTo(0,30);
	cxt.closePath();
	cxt.stroke();
	cxt.fillStyle="red";
	cxt.beginPath();
	//cxt.arc(0,148,4,0,Math.PI*2,true);
	cxt.arc(0,29.6,0.8,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();
	cxt.fillStyle="white";
	cxt.beginPath();
	//cxt.arc(0,148,2,0,Math.PI*2,true);
	cxt.arc(0,29.6,0.8,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();
	cxt.restore();
	//秒针装饰
	cxt.fillStyle="red";
	cxt.beginPath();
	//cxt.arc(250,250,15,0,Math.PI*2,true);
	cxt.arc(50,50,3,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();
	cxt.fillStyle="black";
	cxt.beginPath();
	//cxt.arc(250,250,13,0,Math.PI*2,true);
	cxt.arc(50,50,2.6,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();
	cxt.fillStyle="white";
	cxt.beginPath();
	//cxt.arc(250,250,10,0,Math.PI*2,true);
	cxt.arc(50,50,2,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();
	
}
drawClock();
//setInterval缺点：某些间隔被跳过，多个定时器执行代码之间的间隔可能比较小
//setInterval(drawClock,10);

//链式setTimeout 解决这个问题
setTimeout(function(){
	drawClock();
	setTimeout(arguments.callee,1000);
},1000);