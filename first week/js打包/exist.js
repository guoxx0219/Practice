// 任意一个数组中存在某个特定的值，存在true，不存在false
	function exist(arr,value){
		if (!(typeof arr == 'object' && arguments.length >1)) {
			return '输入错误';
		}
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] == value){
				return true;
			}
		}
		return false;
	}