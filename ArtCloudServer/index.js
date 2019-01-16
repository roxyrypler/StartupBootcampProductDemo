console.log("Server is starting");
// Requering modules
const express = require('express');
const socket = require('socket.io');

//Server serving on port
const app = express();
const port = 3000;
const server = app.listen(port);

//serving public files
app.use(express.static('public'));

let io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log('New connection: ' + socket.id);
	
	
	socket.on('mouse', mouseMsg);
	
	function mouseMsg(data) {
		//Broadcast to all clients excluding the sender
		socket.broadcast.emit('mouse', data);
		// Broadcast to all clients including the sender
		// io.sockets.emit('mouse', data);
		console.log(data);
	}
}

