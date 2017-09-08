// 数组转换成字符串,arr为数组，str为连接符
function join(arr,str){
	str = str==undefined ? '-' : str;
	var result = '';
	for (var i = 0; i < arr.length; i++) {
		if (i < arr.length-1) {
			result += arr[i] + str;
		}else{
			result += arr[i];
		}
	}
	return result;
}