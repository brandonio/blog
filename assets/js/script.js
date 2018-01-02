$(document).ready(function() {
	const html = document.getElementsByTagName('html')[0];
	const ind = $('.ze').length > 0;
	const huevo = $("#egg").length > 0;

	let og = true;
	// let switched = false;
	// let other = false;

	function change(a, b, o, ch, e) {
		html.style.setProperty("--b", a);
		html.style.setProperty("--w", b);
		html.style.setProperty("--opac", o);
		$.each($(".turnoff"), function() { $(this).html(ch.repeat($(this).html().length)) });
		if (ind || huevo) {
			if (ind) { $.each($(".ze"), function() { $(this).html(ch.repeat($(this).html().length)) }); }
			if (e) { $("#egg").show(); }
			else { $("#egg").hide(); }
		}
		og = !og;
	}

	function on() { if (og) { change("white", "black", .87, "O", true); }}
	function off() { if (!og) { change("black", "white", .94, "0", false); }}

	$(".turnoff").click(off);
	$(".turnoff").hover(off);
	$(".turnon").click(on);
	$(".turnon").hover(on);

	function showHex() {
		if ($("#longname").css("display") == "block") {
			$("#shortnum").addClass("showshort");
			$("#longnum").addClass("hidelong");
		}
	}

	function showBin() {
		if ($("#longname").css("display") == "block") {
			// switched = true;
			// other = true;
			// $(".turnoff").off();
			// $(".turnon").off();
			$("#longnum").removeClass("hidelong");
			$("#shortnum").removeClass("showshort");
			// $(".turnoff").click(addback);
			// $(".turnoff").hover(addback);
			// $(".turnon").click(addbackother);
			// $(".turnon").hover(addbackother);
			// switched = false;
			// other = false;
		}
	}

	// function addback() {
	// 	if (switched) { switched = false; }
	// 	else {
	// 		$(".turnoff").off();
	// 		$(".turnoff").click(off);
	// 		$(".turnoff").hover(off);
	// 		if (og) { off(); }
	// 		// if (og) { on(); } else { off(); }
	// 	}
	// }

	// function addbackother() {
	// 	if (other) { other = false; }
	// 	else {
	// 		$(".turnon").off();
	// 		$(".turnon").click(on);
	// 		$(".turnon").hover(on);
	// 		if (!og) { on(); }
	// 		// if (og) { on(); } else { off(); }
	// 	}
	// }

	$("#binswitch").click(showHex);
	$("#binswitch").hover(showHex);
	$("#hexswitch").click(showBin);
	$("#hexswitch").hover(showBin);
});
