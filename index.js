var peerId = document.getElementById('peerId');
var connectBtn = document.getElementById('connect');

var peer = new Peer();
peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});

peer.on('connection', function(conn) {
  conn.on('data', function(data){
	// Will print 'hi!'
	console.log(data);
  });
});

connectBtn.onclick = function(){
	if (peerId.value == ""){ return; }	
	var conn = peer.connect(peerId.value);
	// on open will be launch when you successfully connect to PeerServer
	conn.on('open', function(){
	  // here you have conn.id
	  conn.send('hi!');
	});

};

