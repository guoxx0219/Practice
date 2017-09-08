// 提取数组里的偶数元素
	function filter(arr){
		var newarr = [];
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] % 2 == 0){
				newarr[newarr.length] = arr[i];
			}
		}
		return newarr;
	}