var i=0,//索引
    T=null,//setInterval
    img=$(".img img"),//轮播图
    dot=$(".dot div"),//换页点
    pre=$(".pre"),//上一张按钮
    next=$(".next");//下一张按钮
//切换图片
function changeimg()
{
	img
	.css("display","none");
	img
	.eq(i)
	.css("display","inline");
}
//切换圆点
function changebtn()
{
	dot
	.css({
		"backgroundColor":"rgba(0,0,0,0.2)",
		"border":"1px solid #fff"
	})
	.eq(i)
	.css({
		"backgroundColor":"#fff",
		"border":"1px solid #bbb"
	})
}
//自动轮播
function carousel()
{
	T=
	setInterval(function(){
		i<4?i++:i=0;
		changeimg();
		changebtn();
	},2000)
}
//点击圆点换图
dot
.on({
	mouseover:function(){
		clearInterval(T)
	},
	mouseout:function(){
		carousel()
	},
	click:function(){
		i=$(this).index();
		changeimg();
		changebtn();
	}
})
//图片悬停停止轮播
img
.on({
	mouseover:function(){
		clearInterval(T)
	},
	mouseout:function(){
		carousel()
	}
})
//点击上一张换图
pre
.click(function(){
clearInterval(T);
i>0?i--:i=4;
changeimg();
changebtn();
})
//点击下一张换图
next
.click(function(){
clearInterval(T);
i<4?i++:i=0;
changeimg();
changebtn();
})
//初始状态
changeimg();
changebtn();
carousel();