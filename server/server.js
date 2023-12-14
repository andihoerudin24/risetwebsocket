// server.js

const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
    console.log('Klien terhubung');

    // Event listener ketika klien mengirim pesan
    socket.on('message', (message) => {
        console.log('Menerima pesan:', message);
        console.log(socket.bufferedAmount)

        // Kirim balik pesan ke klien
        socket.send('Pesan diterima dari server andi');
    });
});
