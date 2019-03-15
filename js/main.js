let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for(let i=1; i<65; i++){
	let excel = document.createElement('div');
	field.appendChild(excel);
	excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');
let x=1, y=8;
for(let i=0; i<excel.length; i++){
	if (x>8) {
		x=1;
		y--;
	}
	excel[i].setAttribute('posX', x);
	excel[i].setAttribute('posY', y);
	x++;
	if ((i%2==0 && y%2==0) || (i%2!=0 && y%2!=0)) {
		excel[i].style.backgroundColor = "#faffaf";
	}else{
		excel[i].style.backgroundColor = "#6b3100";
	}
}

// коня в рандомное место

let a = Math.round(Math.random()*63);
excel[a].classList.add('current');
excel[a].classList.add('set');
let step = 1;
excel[a].innerHTML = step;

let currentX = excel[a].getAttribute('posX');
let currentY = excel[a].getAttribute('posY');
console.log(currentX, currentY);

