


let ipc = require('electron').ipcRenderer;



function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	
	testElectronCom();
}


function draw() {
	background(0);
}

function testElectronCom() {
	ipc.send('testCom', 'someData');
}




















