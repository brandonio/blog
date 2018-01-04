$(document).ready(function() {
	const html = document.getElementsByTagName('html')[0];
	const mob = isMobile();

	let og = true;

	function change(a, b, o, ch, e) {
		html.style.setProperty("--b", a);
		html.style.setProperty("--w", b);
		html.style.setProperty("--opac", o);
		
		if (!mob) { $.each($(".ze"), function() { $(this).html(ch.repeat($(this).html().length)) }); }
		if (e) { $("#egg").show(); }
		else { $("#egg").hide(); }

		og = !og;
	}

	function on() { if (og) { change("white", "black", .87, "O", true); }}
	function off() { if (!og) { change("black", "white", .94, "0", false); }}

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
