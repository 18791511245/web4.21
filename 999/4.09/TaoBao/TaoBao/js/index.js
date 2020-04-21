// JavaScript Document
$('#showBox div').eq(0).fadeIn().siblings().fadeOut(); //初始化，第一个显示，其余隐藏；
$('#ctrl li').eq(0).addClass('Cur').siblings().removeClass('Cur'); //初始化，第一个圆点控件当前项添加类；
/*******轮播图********/
//定义自动播放函数
var n = $('#showBox div').length; //定义申明图片的个数；
var x = 0; //定义显示初始值；
function autoplay() {
	//定义循环
	if (x < n - 1) {
		x = x + 1;
	} else {
		x = 0;
	}
	$('#ctrl li').eq(x).addClass('Cur').siblings().removeClass('Cur'); //当前项添加类；
	$('#showBox div').eq(x).fadeIn().siblings().fadeOut();
}

/*** 定义定时器函数 ***/
var timer = setInterval(autoplay, 4000);
//添加定时器鼠标事件；
$('#showBox div').mouseenter(function () {
	clearInterval(timer);
}); //鼠标进入事件；
$('#showBox div').mouseleave(function () {
	timer = setInterval(autoplay, 4000);
}); //鼠标离开事件；这里必须声明timer = setInterval（autoplay，3000；）
/*** 定义圆点控件事件 ***/
$('#ctrl li').mouseenter(function () {
	//获得当前项的索引值
	var x = $(this).index();
	$('#ctrl li').eq(x).addClass('Cur').siblings().removeClass('Cur');
	$('#showBox div').eq(x).fadeIn().siblings().fadeOut();
});
//分页
function operatePage() {
	let next = document.getElementById('next');
	let previous = document.getElementById('previous');
	previous.setAttribute('disabled', 'disabled');
	$('#next').click(function (e) {
		$('.market_item').eq(0).hide();
		$('.market_item').eq(1).hide();
		$('.market_item').eq(2).hide();
		$('.market_item').eq(3).hide();
		$('.market_item').eq(4).hide();
		$('.market_item').eq(5).hide();
		$('.market_item').eq(6).hide();
		$('.market_item').eq(7).hide();
		//
		$('.market_item').eq(9).show();
		$('.market_item').eq(8).show();
		$('.market_item').eq(10).show();
		$('.market_item').eq(11).show();
		$('.market_item').eq(12).show();
		$('.market_item').eq(13).show();
		this.className = 'disabled';
		previous.className = '';
		next.setAttribute('disabled', 'disabled');
		previous.setAttribute('disabled', 'none');
	});
	$('#previous').click(function (e) {
		$('.market_item').eq(0).show();
		$('.market_item').eq(1).show();
		$('.market_item').eq(2).show();
		$('.market_item').eq(3).show();
		$('.market_item').eq(4).show();
		$('.market_item').eq(5).show();
		$('.market_item').eq(6).show();
		$('.market_item').eq(7).show();
		//
		$('.market_item').eq(8).hide();
		$('.market_item').eq(9).hide();
		$('.market_item').eq(10).hide();
		$('.market_item').eq(11).hide();
		$('.market_item').eq(12).hide();
		$('.market_item').eq(13).hide();
		this.className = 'disabled';
		next.className = '';
		previous.setAttribute('disabled', 'disabled');
		next.setAttribute('disabled', 'none');
	});
}
