class Player {
	constructor(canvas,config,area) {
		this.position = {bottom:0, left:0};
		this.name = "Anonymous";
		this.bg = "alien2.png";
		this.bgPosition = "-350px 0px";
		this.canvas = canvas;
		//control Code
		this.control = {
			left : 65,
			right : 68,
			shoot : 32
		}
		this.area = area;
		this._score = 0;
		this._speed = 10;

		if (typeof config.name != "undefined") {
			this.name = config.name;	 
		}
		if (typeof config.bg != "undefined") {
			this.name = config.bg;	 
		}
		if (typeof config.position != "undefined") {
			this.position = config.position;	 
		}
		if (typeof config.bgPosition != "undefined") {
			this.bgPosition = config.bgPosition;	 
		}
		if (typeof config.control != "undefined") {
			this.control = config.control;	 
		}
		if (typeof config.speed != "undefined") {
			this._speed = config.speed;	 
		}
		this._drawplayer();
	}	

	getScore() {
		return this._score;
	}

	_drawplayer() {
		let ctx = this.canvas;
		ctx.style.position = "absolute";
		ctx.style.bottom = this.position.bottom;
		ctx.style.left = this.position.left;
		ctx.style.backgroundImage = 'url('+this.bg+')';
		ctx.style.backgroundPosition = this.bgPosition;
	}

	_moveLeft() {
		if (parseInt(player.style.left) >-10)
			player.style.left = parseInt(player.style.left) - this._speed + 'px';
	}

	_moveRight() {
		if (parseInt(player.style.left) < this.area.offsetWidth-this.canvas.offsetWidth) 
			player.style.left = parseInt(player.style.left) + this._speed + 'px';
	}

	_shoot() {
		let config = {
			position : {
				"top" : this.area.offsetHeight-(parseInt(player.style.bottom)+player.offsetHeight)+"px",
				"left" : parseInt(player.style.left)+10+player.offsetHeight/2+"px"
			},
			"area" : this.area
		}
		let peluru = new Peluru(config);
	}


    initMove() {
    	'use strict';
    	document.addEventListener('keydown', (event) => {
		  const keyCode = event.keyCode;
		  //console.log(keyCode); // use if forget key to see log
		  if (keyCode === this.control.left || keyCode===37) {
		    this._moveLeft();
		    return;
		  }else if (keyCode === this.control.right || keyCode===39) {
		  	this._moveRight();
		    return;
		  }else if (keyCode === this.control.shoot) {
		  	this._shoot();
		    return;
		  }
		}, false);
    }
}