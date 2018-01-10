$(document).ready(function() {
	const html = document.getElementsByTagName('html')[0];
	const mob = isMobile();

	function change(a, b, c) {
		html.style.setProperty("--b", a);
		html.style.setProperty("--w", b);
		html.style.setProperty("--opac", c);
	}

	function on() { change("white", "black", 0); }
	function off() { change("black", "white", 1); }

	function isMobile() {
  		try{ document.createEvent("TouchEvent"); return true; }
  		catch(e) { return false; }
	}

	if (mob) {
		$(".turnoff").click(off);
		$(".turnon").click(on);
	} else {
		$(".turnoff").hover(off);
		$(".turnon").hover(on);
	}
});
