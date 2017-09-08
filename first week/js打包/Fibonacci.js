// 斐波那契数列，i、j为数列的前两位值，max表示数列的最大值
function Fibonacci(i,j,max){
	document.write(i+'&nbsp'+j+'&nbsp');
	for (var k = 0; k < max;) {
		k = i + j;
		document.write(k+'&nbsp');
		i = j;
		j = k;
		if (i + j > max) {
			break;
		}
	}
}