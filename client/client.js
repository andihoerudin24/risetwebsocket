const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:3000');

// Event listener ketika koneksi terbuka
socket.on('open', () => {
    console.log('Koneksi terbuka');

    // Kirim pesan ke server setiap detik
    setInterval(() => {
        const message = 'Pesan ke server';
        console.log('Mengirim pesan:', message);
        
        // Kirim pesan ke server
        socket.send(message);
    }, 1000);
});

// Event listener untuk memantau bufferedAmount
socket.on('bufferedamount', () => {
    console.log('Jumlah data yang masih dalam antrian:', socket.bufferedAmount);
});

// Event listener ketika server mengirim balasan
socket.on('message', (message) => {
    console.log('Menerima balasan dari server:', message);
});

// Event listener ketika koneksi ditutup
socket.on('close', () => {
    console.log('Koneksi ditutup');
});
