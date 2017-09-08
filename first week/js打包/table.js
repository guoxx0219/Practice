// 表格，输入rows，cols，表示有rows行、cols列的表格
function table(rows,cols){
		var table= '<table border=1 cellspacing=0>';
		for (var i = 1; i <= rows; i++) {
			table += '<tr>';
			for (var j = 1; j <= cols; j++) {
				table += '<td>'+j+'-'+i+'</td>'+'&nbsp';
			}
			table += '</tr>';
		}
		table += '</table>';
		document.write(table);
	}