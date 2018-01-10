$(document).ready(function() {
	const html = document.getElementsByTagName('html')[0];
	const mob = isMobile();

	let og = true;

	function change(a, b, o, ch) {
		html.style.setProperty("--b", a);
		html.style.setProperty("--w", b);
		html.style.setProperty("--opac", o);
		if (!mob) { $.each($(".turnoff"), function() { $(this).html(ch.repeat($(this).html().length)) }); }
		og = !og;
	}

	function on() { if (og) { change("white", "black", .88, "O"); }}
	function off() { if (!og) { change("black", "white", .95, "0"); }}

	function isMobile() {
  		try{ document.createEvent("TouchEvent"); return true; }
  		catch(e) { return false; }
	}

	if (mob) {
		$(".turnoff").click(off);
		$(".turnon").click(on);
		$("#binswitch").click(showHex);
		$("#hexswitch").click(showBin);
	} else {
		$(".turnoff").hover(off);
		$(".turnon").hover(on);
		$("#binswitch").hover(showHex);
		$("#hexswitch").hover(showBin);
	}

	function showHex() {
		if ($("#longname").css("display") == "block") {
			$("#shortnum").addClass("showshort");
			$("#longnum").addClass("hidelong");
		}
	}

	function showBin() {
		if ($("#longname").css("display") == "block") {
			$("#longnum").removeClass("hidelong");
			$("#shortnum").removeClass("showshort");
		}
	}
});
