$(document).ready(function() {
	const html = document.getElementsByTagName('html')[0];
	const ind = $('.ze').length > 0;
	const huevo = $("#egg").length > 0;
	const mob = isMobile();

	let og = true;

	function change(a, b, o, ch, e) {
		html.style.setProperty("--b", a);
		html.style.setProperty("--w", b);
		html.style.setProperty("--opac", o);
		if (ind || huevo) {
			if (!mob && ind) { $.each($(".ze"), function() { $(this).html(ch.repeat($(this).html().length)) }); }
			if (e) { $("#egg").show(); }
			else { $("#egg").hide(); }
		}
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
		$("#binswitch").click(showHex);
		$("#hexswitch").click(showBin);
	} else {
		$(".turnoff").hover(off);
		$(".turnon").hover(on);
		$("#hexswitch").hover(showBin);
		$("#binswitch").hover(showHex);
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
