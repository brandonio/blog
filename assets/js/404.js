$(document).ready(function() {
	const html = document.getElementsByTagName('html')[0];

	function change(a, b, c) {
		html.style.setProperty("--b", a);
		html.style.setProperty("--w", b);
		html.style.setProperty("--opac", c);
	}

	function on() { change("white", "black", 0); }
	function off() { change("black", "white", 1); }

	$(".turnoff").click(off);
	$(".turnoff").hover(off);
	$(".turnon").click(on);
	$(".turnon").hover(on);
});
