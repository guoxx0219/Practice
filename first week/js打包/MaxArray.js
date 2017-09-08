// 一维数组最大值
function MaxArray(arr){
		var max = arr[0];
		for (var i = 0; i < arr.length; i++) {
			if (max < arr[i]) {
				max = arr[i];
			}
		}
		console.log(max);
	}