$(document).ready(function() {
	const html = document.getElementsByTagName('html')[0];

	function rand() { return Math.floor((Math.random() * 6) + 1); }
	
	html.style.setProperty("--one", rand());
	html.style.setProperty("--two", rand());
	html.style.setProperty("--three", rand());
	html.style.setProperty("--four", rand());
	html.style.setProperty("--five", rand());
	html.style.setProperty("--six", rand());
});
