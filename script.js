$(document).ready(function() {
	let html = document.getElementsByTagName('html')[0];

	function change(a, b, o) {
		html.style.setProperty("--w", b);
		html.style.setProperty("--b", a);
		html.style.setProperty("--opac", o);
	}

	$(".turnoff").click(function () {
		change("black", "white", .96);
	});

	$(".turnon").click(function () {
		change("white", "black", .85);
	});
});
