window.onload=function(){
	_nav()
	img()
	text_move()

};








//导航的函数；
function _nav(){
	var oNav=document.getElementById('nav');
	var aLi=oNav.getElementsByTagName('li');
	for(var i=0; i<aLi.length; i++)
	{
		aLi[i].onclick=function(){
			for (var i=0; i<aLi.length; i++) 
			{
				aLi[i].className='';
			};
			this.className='bg';
		};
	}
};




//图片轮播；
function img(){
	var oImgae=document.getElementById('img');
	var aImg=oImgae.getElementsByTagName('img');
	var now=0;
	var last=0;
	var timer=setInterval(move,3000);
	oImgae.onmouseover=function(){
		clearInterval(timer);
	};
	oImgae.onmouseout=function(){
		timer=setInterval(move,3000);
	};


		for(var i=5;i<aImg.length-1; i++){
			aImg[i].index=i-5;
			aImg[i].onmouseover=function(){
				outline_move(this.index*60);
				now=this.index-1;
				move(1);
				last=this.index;
			}
		}	


	function move(next){
		now++
		var now_1=now-1;
		var price=0;
		var price_2=100;
		var speed=0.5;
		if(now>4)
		{
			now=0;
		};
		if(next)
		{	speed=5;
			now_1=last	
		}
		else
		{	last=now;
			if(now==0)
			{
				now_1=4;
			}
		}
		
		outline_move(now*60)
		var timer=setInterval(opacity,10);
		function opacity(){
			if(price==100)
			{
				clearInterval(timer);
			}
				aImg[now_1].style.opacity=(price_2-=speed)/100;
				aImg[now_1].style.filter='alpha(opacity:'+(price_2-=speed)+')';
				aImg[now].style.opacity=(price+=speed)/100;
				aImg[now].style.filter='alpha(opacity:'+(price+=speed)+')';	
		};	
	}
}




function outline_move(target){
	var oFrame=document.getElementById('img_hover');
	clearInterval(oFrame.timer);
	oFrame.timer=setInterval(function(){
		var oFrame_top=oFrame.offsetTop;
		var speed=(target-oFrame_top)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);					 	
			oFrame.style.top=oFrame_top+speed+'px';
	},30);
};


//滚动字条
function text_move(){
  var oText=document.getElementById('fluxion');
  var oH3=document.getElementById('roll');
  var timer=setInterval(text_mo,20);
  	function text_mo(){
  	if(oText.offsetLeft==-760)
  	{
  		oText.style.left=1010+'px';
  	}
  	else
  	{
  		oText.style.left=oText.offsetLeft-2+'px';
  	}
  };
 oH3.onmouseover=function(){
 	clearInterval(timer);
  };
 oH3.onmouseout=function(){
   timer=setInterval(text_mo,20);
  };
 
};

















