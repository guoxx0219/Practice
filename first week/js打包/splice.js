// 万能的删除、添加（在任意的位置pos删除并添加num个元素）
function splice(arr,pos,num,...rest){
	var newarr = [];
	// 此处直接赋值，是因为spliceDel的结果为一个数组，直接赋值，若加上[newarr.length]，则表示将整个spliceDel的数组赋值给newarr[0]
	newarr = spliceDel(arr,pos,num);
	if (rest.length > 0) {
		// 此处的...表示将rest数组拆开，形成每一个元素，不加...，仅仅只有rest为一个数组，作为参数传值时，spliceAdd中的rest就会形成二维数组。同时，注意此处的数组传值为newarr，不是arr，是为新数组添加元素
		newarr = spliceAdd(newarr,pos,...rest);
	}
	return newarr;
}
	function spliceDel(arr,pos,num){
			var newarr = [];
			for (var i = 0; i < arr.length; i++) {
				if (i>=pos && i<pos+num) {
					continue;
				}
				newarr[newarr.length] = arr[i];
			}
			return newarr;
		}
	function spliceAdd(arr,pos,...rest){
			var newarr = [];
			for (var i = 0; i < pos; i++) {
				newarr[newarr.length] = arr[i];
			}
			for (var i = 0; i < rest.length; i++) {
				newarr[newarr.length] = rest[i];
			}
			for (var i = pos; i < arr.length; i++) {
				newarr[newarr.length] = arr[i];
			}
			return newarr;
		}