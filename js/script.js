function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let playerMove = 'paper' ;

printMessage('zagrałem' + playerMove + '! Jeśli Twój ruch to nożyczki to wygrywasz!');