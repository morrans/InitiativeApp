function addPlayers() {
	var temp = '';	
	temp = prompt("Enter player") //must cusomize design
	if (temp == "" || temp == null) {
		return;
	} else {
		var temp = {
			name: temp,
			score: 0,
		}
		players.push(temp);
		//document.getElementById('player1').innerHTML = players[0];
	}
	//call function to refresh list of players
}

