class Alien {
	constructor(canvas)
	{
		this.image = 'alien.png';
		this.height = 40;
		this.width = 50;
		this.canvas = canvas;
		this.drawObject();
	}

	drawObject()
	{	
		let ctx = this.canvas.getContext('2d');
		let img = new Image();

		img.onload = function() {
			ctx.drawImage(img, 0, -35, 64, 256, 0, 0, 50, 40);
		}
		img.src= 'alien.png';
	}
}