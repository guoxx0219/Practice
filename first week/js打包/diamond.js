//菱形，输入row，会有row行*，*最多有row个 
function diamond(row){
		var row1 = (row+1)/2;
		for (var i = 1; i <= row; i++) {
			if (i < row1) {
				for(var j = 1; j <= row1-i; j++){
					document.write('-');
				}
				for(var j = 1; j <= 2*i-1; j++){
					document.write('*');
				}
			}else{
				for(var j = 1; j <= i-row1; j++){
					document.write('-');
				}
				for(var j = 1; j <= 2*(row-i)+1; j++){
					document.write('*');
				}
			}
			document.write('<br/>');
		}
	}