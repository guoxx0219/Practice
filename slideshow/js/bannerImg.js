let bigimg_ul = document.getElementsByClassName('bigimg-ul')[0];
let lis = bigimg_ul.getElementsByTagName('li');
let circle = document.getElementsByClassName('circle')[0];
let circle_lis = circle.getElementsByTagName('li');
let shop_list = document.getElementsByClassName('shop-list')[0];
let list_li = shop_list.getElementsByTagName('li');
let t;
let num = 0;
let banner = $('.banner')[0];
//方法1：
// var now = 0;
// for (let i = 0; i < circle_lis.length; i++) {
// 	circle_lis[i].onmouseover = function(){
// 		lis[now].className = '';
// 		lis[i].className = 'block';
// 		now = i;
// 	}
// }
//方法2：
// var now = 0;
// for (var i = 0; i < circle_lis.length; i++) {
// 	//问题：var不能保存每次的i值，不运行function，结果就是每个i值的返回值都是最后的function值
// 	//给每个circle_lis添加一个属性，让其保存每次循环时i的值，避免新值覆盖旧值，此时的
// 	//circle_lis为一个对象
// 	circle_lis[i].index = i;
// 	circle_lis[i].onmouseover = function(){
// 		console.log(lis[now]);
// 		lis[now].className = '';
// 		lis[this.index].className = 'block';
// 		now = this.index;
// 	}
// }
//方法3：
// var now = 0;
// for (var i = 0; i < circle_lis.length; i++) {
// 	//使用闭包函数来保存i值
// 	circle_lis[i].onmouseover = (function(i){
// 		return function(){
// 			lis[now].className = '';
// 			lis[i].className = 'block';
// 			now = i;
// 		};
// 	})(i);
// }


for (let i = 0; i < list_li.length; i++) {
	list_li[i].onmouseover = function(){
        let list_jump = this.getElementsByClassName('list-jump')[0];
        list_jump.style.display = 'block';
	}
	list_li[i].onmouseout = function(){
        let list_jump = this.getElementsByClassName('list-jump')[0];
        list_jump.style.display = 'none';
	}
}


t = setInterval(move, 2000);
function move(){
	num ++;
	if (num == lis.length) {
		num = 0;
	}
	for (let i = 0; i < lis.length; i++) {
		lis[i].className = '';
		circle_lis[i].style.background = 'rgb(0, 0, 0)';
	}
	lis[num].className = 'block';
	circle_lis[num].style.background = 'rgb(255, 255, 255)';
}
// let now = 0;
for (let i = 0; i < circle_lis.length; i++) {
	circle_lis[i].onmouseover = function(){
		// lis[now].className = '';
		// circle_lis[now].style.background = 'rgb(0, 0, 0)';
		for (let i = 0; i < circle_lis.length; i++) {
			lis[i].className = '';
			circle_lis[i].style.background = 'rgb(0, 0, 0)';
		}
		lis[i].className = 'block';
		circle_lis[i].style.background = 'rgb(255, 255, 255)';
		// 保存num为当前圆点的下标
		num = i;
		// now = i;
	}
}

banner.onmouseover = function(){
	clearInterval(t);
}
banner.onmouseout = function(){
	t = setInterval(move, 2000);
}

function $(select,ranger){
	ranger = ranger ? ranger : document;
	let first = select.charAt(0);
	if (first == '#') {
		return document.getElementById(select.substring(1));
	}else if (first == '.') {
		return ranger.getElementsByClassName(select.substring(1));
	}else if (/^[a-z][a-z1-6]{0,7}$/.test(select)) {
		return ranger.getElementsByTagName(select);
	}
}