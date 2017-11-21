$(document).ready(function() {
	const html = document.getElementsByTagName('html')[0];
	const ind = $('.ze').length > 0;
	const huevo = $("#egg").length > 0;

	let og = true;

	function change(a, b, o, ch, e) {
		html.style.setProperty("--b", a);
		html.style.setProperty("--w", b);
		html.style.setProperty("--opac", o);
		$.each($(".turnoff"), function() { $(this).html(ch.repeat($(this).html().length)) });
		if (ind || huevo) {
			if (ind) {
				$.each($(".ze"), function() { $(this).html(ch.repeat($(this).html().length)) });
			}
			if (e) {
				$("#egg").show();
			} else {
				$("#egg").hide();
			}
		}
		og = !og;
	}

	function on() {
		if (og) {
			change("white", "black", .87, "O", true);
		}
	}

	function off() {
		if (!og) {
			change("black", "white", .95, "0", false);
		}
	}

	$(".turnoff").click(off);
	$(".turnoff").hover(off);
	$(".turnon").click(on);
	$(".turnon").hover(on);
});
