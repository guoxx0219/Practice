let user = document.getElementById('user');
let password = document.getElementById('password');
let button = document.getElementById('button');
button.onclick = function(){
	let uv = user.value;
	let pv = password.value;
	if (uv == 'zhangsan' && pv == 123456) {
		alert('success');
	}else{
		location.replace('error.html');
	}
}