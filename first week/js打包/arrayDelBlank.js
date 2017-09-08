//给一维数组去空
function arrayDelBlank(arr){
		var newarr = [];
		for (var i = 0; i < arr.length; i++) {
			// 还可写成arr[i]==undefined
			if (typeof arr[i] == 'undefined') {
				continue;
			}
			newarr[newarr.length] = arr[i];
		}
		console.log(newarr);
	}