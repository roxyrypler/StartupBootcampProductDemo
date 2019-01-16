


let ipc = require('electron').ipcRenderer;

let cW = 1000;
let cH = 700;
let socket;

let rosa = '#ef5777';
let blå = '#4bcffa';
let grønn = '#0be881';
let lilla = '#575fcf';

let clientColor = lilla;
let serverColor = lilla;

function setup() {
	createCanvas(cW, cH);
	background(0);
	socket = io.connect('https://dragonstick.localtunnel.me');
	socket.on('mouse', newDrawing);
	
	testElectronCom();
}

function draw() {
	
}
//Server
function newDrawing(data) {
	noStroke();
	fill(data.color);
	ellipse(data.x, data.y, 10, 10);
}
//Client farge
function mouseDragged() {
	console.log('Sending: ' + mouseX + ', ' + mouseY);
	noStroke();
	fill(clientColor);
	ellipse(mouseX, mouseY, 10, 10);
	
	let data = {
		x: mouseX,
		y: mouseY,
		color: clientColor
	}
	socket.emit('mouse', data);
	
}

function rosaClicked() {
	clientColor = rosa;
}

function blåClicked() {
	clientColor = blå;
}

function grønnClicked() {
	clientColor = grønn;
}

function lillaclicked() {
	clientColor = lilla;
}

function testElectronCom() {
	ipc.send('testCom', 'someData');
}
















