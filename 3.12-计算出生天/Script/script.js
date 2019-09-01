//计算生日所在天数的函数
function calBD(Y,M,D)
{
	var i,n=0,sum=0;
	//计算平年生日天数
	for(i=1;i<M;i++)
	{
		if(i==2)
		{n=28};
		if(i==4||i==6||i==9||i==11)
		{n=30};
		if(i==1||i==3||i==5||i==7||i==8||i==10||i==12)
		{n=31};
		sum+=n
	}
	//闰年生日天数
	//if((Y%4==0&&Y%100!=0&&M>2)||(Y%100!=0&&Y%400==0&&M>2))
	if(Y%4==0&&Y%100!=0||Y%400==0&&M>2)
	{
		sum+=1
	}
	return sum+D;
}
//年月日输入函数
function proYMD()
{
	var 
	Y=parseInt(prompt("请输入您的出生年份")),
	M=parseInt(prompt("请输入您的出生月份")),
	D=parseInt(prompt("请输入您的出生日期"));
	document.write("您的生日在"+Y+"年"+"是第"+calBD(Y,M,D)+"天")
}		
//调用函数计算天数
proYMD();
