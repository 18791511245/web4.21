function rolling(rollingID,m_unitID,step,interval){
	var rolling=document.getElementById(rollingID);
	var m_unit=document.getElementById(m_unitID);
	var listul=document.getElementsByTagName("ul")[0];
	var imgs=listul.getElementsByTagName("img");
	var zhefandian;
	listul.innerHTML+=listul.innerHTML;
	var lis=listul.getElementsByTagName("li");
	var lislengt=lis.length;
	for (var i=0;count=0;i<imgs.length;i++){
		imgs[i].onload=function(){
			count++;
			if (count==imgs.length){
				zhefandian=lis[lislengt/2].offsetLeft;
				
			}
		}
	}
	var nowleft=0;
	var timer;
	
	rolling.onmouseover=function(){
		clearInterval(timer);
	}
	rolling.onmouseout=function(){
		move();
	}
	function move(){
		clearInterval(timer);
		timer=setInterval(function(){
			nowleft-=5;
			if (nowleft<-zhefandian){
				nowleft=0;
			}
			m_unit.style.left=nowleft+"px";
			
		},interval)
	}


}
