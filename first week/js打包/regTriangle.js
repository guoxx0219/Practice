//金字塔-一个正三角，输入row，共有row行*，*最多有2*row+1 
function regTriangle(row){
		for (var i = 1; i <= row; i++) {
			for (var j = 1; j <= (row-i); j++) {
				document.write('-');
			}
			for (var j = 1; j <= (2*i-1); j++) {
				document.write('*');
			}
			document.write('<br/>');
		}
	}