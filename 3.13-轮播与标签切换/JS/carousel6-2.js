//获取元素
function byid(id){
	return document.getElementById(id);
}
var i=0,//索引
    I=0,//用于遍历
    T=null,//超时调用
    tab=byid("tab").getElementsByTagName("div"),//标签容器
    img=byid("img").getElementsByTagName("img");//图片容器
//初始状态
tab[i].className="active";
img[i].style.display="block";
//切换标签图片
function changeimg()
{
	for(I=0;I<=3;I++)
	{
		tab[I].className="";
		img[I].style.display="none";
	}
	tab[i].className="active";
	img[i].style.display="block";
}
//自动轮播
function carousel()
{
	T=setInterval(
		function()
		{
			i<3?i++:i=0;
			changeimg();
		},1000)
}
//点击标签图片跳转
for(I=0;I<=3;I++)
{
	tab[I].id=I;
	tab[I].onclick=function()
	{
		i=this.id;
		changeimg();
	}
}
//悬停停止轮播移除开始轮播
byid("banner").onmouseover=function(){clearInterval(T)};
byid("banner").onmouseout=function(){carousel()};
carousel();