//瀑布流
function waterfall(wrap,boxes){
	//获取可显示的列数
	var boxwidth=boxes[0].offsetWidth+20,
	    windowwidth=window.innerWidth,
	    colsnumber=Math.floor(windowwidth/boxwidth);
	//设置容器宽度
	wrap.style.width=boxwidth*colsnumber+"px";

	//用数组来存储每一列的高度
	var eachheight=new Array;
	for(var i=0;i<boxes.length;i++){
		if(i<colsnumber){
			eachheight[i]=boxes[i].offsetHeight+20;
		}
		else{
			//一、找到目前最小高度
			var I=0,
			    index=0,
			    minheight=eachheight[0];
			for(I;I<eachheight.length;I++){
				minheight<eachheight[I]?minheight:minheight=eachheight[I]
			}
			//二、找到最小高度的box的索引
			for(I=0;I<eachheight.length;I++){
				eachheight[I]==minheight?index=I:index;
			}
			//三、获得最小高度box的left值
			leftvalue=boxes[index].offsetLeft-10;
			topvalue=minheight;
			boxes[i].style.position="absolute";
			boxes[i].style.left=leftvalue+"px";
			boxes[i].style.top=topvalue+"px";
			//四、往eachheight数组中添加新的高度
			eachheight[index]=eachheight[index]+boxes[i].offsetHeight+20;
		}
	}
}

window.onload=function()
{
	var wrap=document.getElementById("wrap"),
	    boxes=wrap.getElementsByTagName("div");
	waterfall(wrap,boxes);
}