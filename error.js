let info = document.getElementById('info');
let t = setInterval(function(){
	if (info.innerText > 0) {
		info.innerText -= 1; 
	}else{	
		clearInterval(t);
		location.replace('index.html');
	}
},1000);
