var quotes = [
	'Get high or die trying'
	'She was tickled pink by the good news'
	'Rise and shine'
	'Close, but no cigar'
	'I was just pulling your leg'
	'Keep your chin up'
	'I will clean my room when pigs fly'
	'Hold your horses'
	'I could play outside till the cows come home'
	'We\'re all in the same boat'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}