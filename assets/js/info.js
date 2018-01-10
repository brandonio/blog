$(document).ready(function() {
	const html = document.getElementsByTagName('html')[0];
	const mob = isMobile();

	let og = true;

	function rand() { return Math.floor((Math.random() * 6) + 1); }
	html.style.setProperty("--one", rand());
	html.style.setProperty("--two", rand());
	html.style.setProperty("--three", rand());
	html.style.setProperty("--four", rand());
	html.style.setProperty("--five", rand());
	html.style.setProperty("--six", rand());

	function isMobile() {
  		try{ document.createEvent("TouchEvent"); return true; }
  		catch(e) { return false; }
	}

	function change(a, b, o, ch) {
		html.style.setProperty("--b", a);
		html.style.setProperty("--w", b);
		html.style.setProperty("--opac", o);
		if (!mob) { $.each($(".turnoff"), function() { $(this).html(ch.repeat($(this).html().length)) }); }
		og = !og;
	}

	function on() { if (og) { change("white", "black", .88, "O"); }}
	function off() { if (!og) { change("black", "white", .95, "0"); }}

	if (mob) {
		$(".turnoff").click(off);
		$(".turnon").click(on);
	} else {
		$(".turnoff").hover(off);
		$(".turnon").hover(on);
	}
});
