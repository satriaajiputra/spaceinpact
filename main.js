let gameArea = document.getElementById("gameArea");
let canvas = document.getElementsByClassName('alien1');
let canvas2 = document.getElementsByClassName('alien2');
let canvas3 = document.getElementsByClassName('alien3');
let enemyList = [];

let area = document.getElementById('alien1');
let area2 = document.getElementById('alien2');
let area3 = document.getElementById('alien3');
let canvasPlayer = document.getElementById('player');
let alienConfig = {
	width : 50,
	height : 40,
	type : 1,
	space : 40
};

let canvasPeluru = document.getElementById('player');

let board1 = new Board(area,canvas);
board1.setAlien(alienConfig);
enemyList.push(board1.generate());

let alien2Config= alienConfig;
alien2Config.type = 2;
let board2 = new Board(area2,canvas2);
board2.setAlien(alien2Config);
enemyList.push(board2.generate());

let alien3Config= alienConfig;
alien3Config.type = 3;
let board3 = new Board(area3,canvas3);
board3.setAlien(alien3Config);
enemyList.push(board3.generate());

configPlayer = {
	bgPosition : "-335px 0px",
	speed : 10,
	position : {bottom:"0px",left:(gameArea.offsetWidth-canvasPlayer.offsetWidth)/2}

}
let player1 = new Player(canvasPlayer, configPlayer, gameArea);
window.onload= function(e) {
	player1.initMove();
}
let x=0;
setInterval(function () {
	if (x%2==0) {
		area.style.left = "30px";
		area2.style.left = "30px";
		area3.style.left = "30px";
	}else{
		area.style.left = "0px";
		area2.style.left = "0px";
		area3.style.left = "0px";
	}
	x++;
},500);