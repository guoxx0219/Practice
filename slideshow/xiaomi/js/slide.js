let banner_img = document.getElementsByClassName('banner-img')[0];
let img_li = banner_img.getElementsByTagName('li');
let circle = document.getElementsByClassName('circle')[0];
let lis = circle.getElementsByTagName('a');
let item = document.getElementsByClassName('item');
let aside_ul = document.getElementsByClassName('aside-ul')[0];
let ul_lis = aside_ul.getElementsByTagName('li');
let left_pre = $('.left-pic')[0];
let right_pre = $('.right-pic')[0];
let bao = $('.bao')[0];
let t;
let num = 0;
//方法1：
// for (let i = 0; i < lis.length; i++) {
// 	lis[i].onclick = function(){
// 		//所有消失 对应的显示
// 		for (let j = 0; j < img_li.length; j++) {
// 			img_li[j].style.display = "none";
// 		}
// 		img_li[i].style.display = 'block';
// 	}	
// }
//方法2：
// now 对应显示的窗口
// var now = 0;
// for (let i = 0; i < lis.length; i++) {
// 	lis[i].onclick = function(){
		// now为当前图片，i为即将要展示的图片
// 		img_li[now].style.display = "none";
// 		img_li[i].style.display = 'block';
// 		now = i;
// 	}
// }

// 侧导航效果
for (let i = 0; i < ul_lis.length; i++) {
	ul_lis[i].onmouseover = function(){
		item[i].style.display = "block";
	}
	ul_lis[i].onmouseout = function(){
		item[i].style.display = "none";
	}
}


t = setInterval(move, 2000);

// 动画效果
function move(){
	num++;
	if (num == img_li.length) {
		num = 0;
	}
	for (let i = 0; i < img_li.length; i++) {
		img_li[i].style.display = 'none';
		lis[i].style.background = 'rgba(127, 118, 106, 0.8)';
	}
	img_li[num].style.display = 'block';
	lis[num].style.background = 'rgb(232, 232, 232)';
}
// 鼠标移入大图时清除动画效果
bao.onmouseover = function(){
	clearInterval(t);
}
bao.onmouseout = function(){
	t = setInterval(move, 2000);
}

// 小圈的点击效果
for (let i = 0; i < lis.length; i++) {
	lis[i].onclick = function(){
		//所有消失 对应的显示
		for (let j = 0; j < img_li.length; j++) {
			img_li[j].style.display = 'none';
			lis[j].style.background = 'rgba(127, 118, 106, 0.8)';
		}
		img_li[i].style.display = 'block';
		lis[i].style.background = 'rgb(232, 232, 232)';
		num = i;
	}
}
//左右箭头的点击效果
left_pre.onclick = function(){
	move_left();
}
right_pre.onclick = function(){
	move();
}

function move_left(){
	num--;
	if (num < 0) {
		num = img_li.length-1;
	}
	for (let i = 0; i < img_li.length; i++) {
		img_li[i].style.display = 'none';
		lis[i].style.background = 'rgba(127, 118, 106, 0.8)';
	}
	img_li[num].style.display = 'block';
	lis[num].style.background = 'rgb(232, 232, 232)';
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