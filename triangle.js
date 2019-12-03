const triangle = (rows) => {
	for (let i = 1; i <= rows; i++) {
		let str = '';
		for (let j = 1; j <= rows - i; j++) {
			str += ' ';
		}
		let max = 2 * i - 1;
		for (let k = 1; k <= max; k++) {
			if (i > 1 && i !== rows) {
				str += k === 1 || k === max ? '*' : ' ';
			} else {
				str += k % 2 === 0 ? ' ' : '*';
			}
		}
		console.log(str);
	}
};

triangle(10);
