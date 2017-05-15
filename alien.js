class Alien {
	constructor(canvas)
	{
		this.image = 'alien2.png';
		this.height = 40;
		this.width = 50;
		this.canvas = canvas;
		
		this.drawObject();
	}

	drawObject()
	{	
		let ctx = this.canvas.getContext('2d');
		let img = new Image();
		let clientX = 0;
		
		img.onload = function() {
			ctx.drawImage(img, 0,0,50,40,0,0,50,40);
		}

		img.src= this.image;
	}
}