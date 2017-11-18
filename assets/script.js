$(document).ready(function() {
	let html = document.getElementsByTagName('html')[0];

	function change(a, b, o, ch) {
		html.style.setProperty("--b", a);
		html.style.setProperty("--w", b);
		html.style.setProperty("--opac", o);
		$.each($(".turnoff"), function() { $(this).html(ch.repeat($(this).html().length)) });
	}

	function on() {
		change("white", "black", .87, "O");
	}

	function off() {
		change("black", "white", .95, "0");
	}

	$(".turnoff").click(off);
	$(".turnoff").hover(off);
	$(".turnon").click(on);
	$(".turnon").hover(on);

});
