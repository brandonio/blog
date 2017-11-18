$(document).ready(function() {
	let html = document.getElementsByTagName('html')[0];
	var og = true;

	function change(a, b, o, p, d, ch) {
		html.style.setProperty("--b", a);
		html.style.setProperty("--w", b);
		html.style.setProperty("--opac", o);
		html.style.setProperty("--on", p);
		html.style.setProperty("--off", d);
		$.each($(".turnoff"), function() { $(this).html(ch.repeat($(this).html().length))});
	}

	$(".turnoff").click(function () {
		change("black", "white", .95, "pointer", "default", "0");
		og = true;
	});

	$(".turnoff").hover(
		function () { if (!og)  { change("black", "white", .95, "default", "pointer", "0"); }},
		function () { if (!og) { change("white", "black", .87, "default", "pointer", "O"); }}
	);

	$(".turnon").click(function () {
		change("white", "black", .87, "default", "pointer", "O");
		og = false;
	});

	$(".turnon").hover(
		function () { if (og) { change("white", "black", .87, "pointer", "default", "O"); }},
		function () { if (og)  { change("black", "white", .95, "pointer", "default", "0"); }}
	);
	
});
