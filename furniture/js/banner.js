window.onload = function(){
	let banner = document.querySelector('.banner');
	let banner_lis = document.querySelectorAll('.banner-img>li');
	let w;
	let t;
	let next = 0 ;
	let now = 0;
	let circle_ul = document.querySelector('.circle-ul');
	let circle_lis = document.querySelectorAll('.circle-ul>li');
	let icon_left = document.querySelector('.icon-mjiantou-copy');
	let icon_right = document.querySelector('.icon-mjiantou-copy1');
	let flag1 = true;

	t = setInterval(bannerMove, 3000);

	function bannerMove(){
		// if (!flag1) {return;}
		flag1 = false;
		w = scroll();
		next++;
		if (next == banner_lis.length) {
			next = 0;
		} 
		banner_lis[next].style.display = 'block';
		banner_lis[next].style.left = `${w}px`;
		animate(banner_lis[next],{left:0});
		animate(banner_lis[now],{left:-w},function(){
			return flag1 = true;
		});
		circle_lis.forEach(element=>{
			element.style.opacity = '0.25';
		});
		circle_lis[next].style.opacity = '0.7';
		now = next;
	}
	function scroll(){
		return banner_lis[0].offsetWidth;
	}
	circle_lis.forEach((element,index)=>{
		element.onclick = function(){
			flag1 = false;
			banner_lis[index].style.display = 'block';
			banner_lis[index].style.left = `${w}px`;
			animate(banner_lis[index],{left:0});
			animate(banner_lis[now],{left:-w},function(){
				flag1 = true;
			});
			circle_lis.forEach(value=>{
				value.style.opacity = '0.25';
			});
			circle_lis[index].style.opacity = '0.7';
			now = next = index;
		}
	});
	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(bannerMove, 3000);
	}
	icon_right.onclick = function(){
		if (!flag1) {return;}
		bannerMove();
	}
	icon_left.onclick = function(){
		if (!flag1) {return;}
		bannerMove2();
	}
	function bannerMove2(){
		// if (!flag1) {return;}
		flag1 = false;
		w = scroll();
		next--;
		if (next < 0) {
			next = banner_lis.length-1;
		} 
		banner_lis[next].style.display = 'block';
		banner_lis[next].style.left = `${w}px`;
		animate(banner_lis[next],{left:0});
		animate(banner_lis[now],{left:-w},function(){
			flag1 = true;
		});
		circle_lis.forEach(element=>{
			element.style.opacity = '0.25';
		});
		circle_lis[next].style.opacity = '0.7';
		now = next;
	}
}