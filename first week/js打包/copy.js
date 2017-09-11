// 一个数组复制给另一个数组（可以是一维、二维、多维）
function copy(arr){
	var arr1 = [];
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] == 'object') {
			arr1[i] = copy(arr[i]);
		}else{
			arr1[i] = arr[i];
		}
	}
	return arr1;
}