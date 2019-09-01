//瀑布流
function waterfall(wrap,box){
	//获取可显示的列数
	var boxwidth=box.eq(0).width()+20,
	    windowwidth=$(window).width(),
	    colsnumber=Math.floor(windowwidth/boxwidth);
	//设置容器宽度
	wrap.width(boxwidth*colsnumber)
    //数组存储每一个高度
	var i=0,
	    colsheight=new Array();
	for(i=0;i<box.length;i++){
		if(i<colsnumber){
			colsheight[i]=box.eq(i).height()+20;
		}
		else{
			//找到目前最小高度
			var I=0,
			    minindex=0,
			    minheight=colsheight[0];

			for(I=0;I<colsheight.length;I++){
				colsheight[I]<minheight?minheight=colsheight[I]:minheight;
			}
			//找到最小高度的box的索引
			for(I=0;I<colsheight.length;I++){
				colsheight[I]==minheight?minindex=I:minindex;
			}
			//设置定位
			var leftvalue=box.eq(minindex).position().left,
			    topvalue=minheight;
			box.eq(i).css({
				"position":"absolute",
				"top":topvalue+"px",
				"left":leftvalue+"px"
			})
			//更新数组中的高度值
			colsheight[minindex]+=box.eq(i).height()+20;
		}
	}
}


$(document).ready(function(){
	var wrap=$("#wrap"),
	    box=$(".boxes");
	waterfall(wrap,box);
})
