//向一维数组后面添加任意个数组元素
function push(arr,...value){
	for(var i=0; i<value.length; i++){
	   arr[arr.length] = value[i];
	}
	console.log(arr);
}