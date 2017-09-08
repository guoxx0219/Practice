// 二维数组最大值，此处的classes为二维数组
function MAX_dyadicArray(classes){
		classes = [[80,90,98],[70,75,85],[60,64,67]];
		var max = classes[0][0];
		for (var i = 0; i < classes.length; i++) {
			for (var j = 0; j < classes[i].length; j++) {
				if(max < classes[i][j]){
					max = classes[i][j];
				}
			}
		}
		document.write(max);
	}