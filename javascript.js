var quotes = [
	'Get high or die trying',
	'She was tickled pink by the good news',
	'Rise and shine',
	'Close, but no cigar',
	'I was just pulling your leg',
	'Keep your chin up',
	'I will clean my room when pigs fly',
	'Hold your horses',
	'I could play outside till the cows come home',
	'Were all in the same boat'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

var player = {
    name: "John",
    score: 0,
};

var players = []
var temp2 = '';

function addPlayers() {
	var temp = '';	
	temp = prompt("Enter player")
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
	var e = "<hr/>";   
	for (var y=0; y<players.length; y++) {
	  e += "Playya " + y + " = " + players[y].name + "<br/>";
	}
	document.getElementById("player1").innerHTML = e;

}

var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 //alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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
