class Board {
	constructor(area,canvas) {
	  this.area = area;
	  this.canvas = canvas;
	}

	setAlien(alien) {
		this.alien = alien;
	}
	generate() {
		let area = this.area;
		let canvas = this.canvas;
		let alien = this.alien;
		let elemen = [];
		let enemy = []
		for (let i=0; i<Math.floor(area.offsetWidth/(alien.width+alien.space)); i++) {
			enemy[i] = 0;//0=live 1=killed
			elemen[i] = new Alien(canvas[i],alien.width,alien.height);
			elemen[i].setAlien(alien.type);
			elemen[i].drawObject();
			if (i==Math.floor(area.offsetWidth/(alien.width+alien.space))-1) break;
			let cln = canvas[i].cloneNode(true);
			area.appendChild(cln);
		}
		return enemy;
	}
}