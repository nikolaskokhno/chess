let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for(let i=1; i<65; i++){
	let excel = document.createElement('div');
	field.appendChild(excel);
	excel.classList.add('excel');
}