$('#main').change((e) => {
	const fruitEl = $('#fruit');
	console.log(fruitEl);
	console.log(e.target.value);
	switch (e.target.value) {
		case 'apple':
			fruitEl.text('🍏');
			break;
		case 'banana':
			fruitEl.text('🍌');
			break;
		case 'cherry':
			fruitEl.text('🍒');
			break;
		default:
			break;
	}
});
