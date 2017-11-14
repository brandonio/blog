$(document).ready(function() {
	let html = document.getElementsByTagName('html')[0];

	function change(a, b, o) {
		html.style.setProperty("--w", b);
		html.style.setProperty("--b", a);
		html.style.setProperty("--opac", o);
	}

	$(".turnoff").click(function () {
		change("black", "white", .96);
		html.style.setProperty("--on", "pointer");
		html.style.setProperty("--off", "default");
	});

	$(".turnon").click(function () {
		change("white", "black", .85);
		html.style.setProperty("--on", "default");
		html.style.setProperty("--off", "pointer");
	});
});
