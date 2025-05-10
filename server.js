const WebSocket = require('ws');

// Membuat server WebSocket di port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Menyimpan semua koneksi client
const clients = new Set();

// Saat koneksi client baru
wss.on('connection', function(ws) {
  console.log('Client baru terhubung');
  
  clients.add(ws);
  
  ws.on('message', function(message) {
    const messageStr = message.toString();
    console.log('Pesan diterima:', messageStr);
    
    broadcast(messageStr, ws);
  });
  
  ws.on('close', function() {
    console.log('Client terputus');
    clients.delete(ws);
    broadcast('Seorang user telah keluar dari chat!', null);
  });
});

// Fungsi broadcast ke semua client kecuali pengirim
function broadcast(message, sender) {
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== sender) {
      client.send(`User lain: ${message}`);
    }
  });
}

console.log('Server WebSocket berjalan di ws://127.0.0.1:8080');
