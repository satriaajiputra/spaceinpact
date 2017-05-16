class Alien {
	constructor(canvas,width,height)
	{
		this.image = 'alien2.png';
		this.height = height;
		this.width = width;
		this.canvas = canvas;
		this.speed = 300;
		this.margin = 6; //margin on sprites
		this.alien = 1; //type of alien
		this.startFrame = 0;
		this.score = 10;
		this.space =40; //margin on html (jarak tiap alien di dom)
	}

	setImage(image) {
		this.image = image;
	}

	setAlien(alien) {
		this.alien = alien;
	}

	setSpace(space) {
		this.space =space;
	}

	cekFrame() {
		if (this.alien == 1) {
			this.startFrame = 0;
		}else if (this.alien == 2) {
			this.startFrame = 2;
		}
		else if (this.alien == 3) {
			this.startFrame = 4;
		}else{
			this.startFrame = 0;
		}
	}
	drawObject()
	{	
		this.cekFrame();
		let ctx = this.canvas;
		let plusX = this.startFrame*(this.width+this.margin); //untuk menentukan posisi left bg
		let base = this;
		let frame = 0;
		ctx.style.backgroundImage = 'url('+base.image+')';
		setInterval(function () {
			let positionX = (frame % 2)*base.width+plusX+(frame % 2)*base.margin;
			ctx.style.backgroundPosition = -positionX+"px 0px";
			frame++;
		},base.speed);
	}
}