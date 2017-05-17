class Peluru {
	constructor(config, isAktif) {
		this._step = 15;
		this.position = {top:0, left:0};
		this.speed = 100;
		this.player = config.player;
		this.active = isAktif;
		if (!!config && typeof config.position != "undefined") {
			this.position = config.position;	 
		}
		if (!!config && typeof config.coordinate != "undefined") {
			this.coordinate = config.coordinate;	 
		}
		if (!!config && typeof config.area != "undefined") {
			this.area = config.area;	 
		}
		if (this.active ==0) {
			this.drawObject();
		}		
	}

	setSpeed(speed) {
		this.speed = speed;
	}

	drawObject() {
		let canvas = document.createElement("canvas");
		let gameArea = this.area;
		canvas.id = "peluru";
		canvas.style.width = "7px";
		canvas.style.height = "14px";
		canvas.style.position = "absolute";
		canvas.style.background= 'white';
		canvas.style.left= this.position.left;
		canvas.style.top= this.position.top;
		gameArea.insertBefore(canvas,gameArea.firstChild);
		let peluru = this;
		this.canvas = canvas;
		this.animate = setInterval(function() {
			peluru.moveUp();
		},peluru.speed);
	}
	cekEnemy(peluru) {
		// let elemOffset  = peluru.getBoundingClientRect(),
		// topElem = document.elementFromPoint(elemOffset.left, elemOffset.top);
		let	x = Math.floor(peluru.offsetLeft/90),
			y = Math.floor(peluru.offsetTop/80);
	
		if (typeof enemyList[y] != "undefined" && enemyList[y][x] == 0) {
			let yCanvas=y+1, xCanvas = x; 
			let canvas = document.getElementsByClassName("alien"+yCanvas)[xCanvas];
			if (peluru.offsetLeft < canvas.offsetLeft+canvas.offsetWidth && peluru.offsetLeft+peluru.offsetWidth> canvas.offsetLeft) {
				canvas.style.backgroundImage = "none";	
				enemyList[y][x] = 1;
				this.player.addScore();
				this.player.showScore();
				return true;
			}			
		}
		return false;
	}
	moveUp() {
		let peluru = this.canvas;
		let top = parseInt(peluru.style.top);
		if (top>0 && this.cekEnemy(peluru) == false)  {
			this.canvas.style.top = parseInt(top) - this._step + 'px';
			return;
		}
		this.removePeluru();
	}
	removePeluru() {
		clearInterval(this.animate);
		let elemen = this.canvas;
		this.canvas.parentNode.removeChild(elemen);	
		this.player.isShoot = 0;
	}

}