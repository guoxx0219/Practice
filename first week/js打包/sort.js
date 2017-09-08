// 一维数组排列，type为<、>，表示升序、降序
function sort(arr){
	// 默认排序方式:三种方式
	// if (type == undefined) {
	// 	type = '<';
	// }
	// 三元运算符:
	// type = type==undefined ? '<' : type;
	// function sort(arr,type='<')
	type = type || '<';

	if (type == '<') {
		sortUp(arr);
	}else{
		sortDown(arr);
	}
}

// 升序
function sortUp(arr){
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			if(arr[i] < arr[j]){
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	console.log(arr);
}

// 降序
function sortDown(arr){
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			if(arr[i] > arr[j]){
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	console.log(arr);
}