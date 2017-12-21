$(document).ready(function() {
	const html = document.getElementsByTagName('html')[0];
	const ind = $('.ze').length > 0;
	const huevo = $("#egg").length > 0;

	let og = true;


	function change(a, b, o, ch, e) {
		html.style.setProperty("--b", a);
		html.style.setProperty("--w", b);
		html.style.setProperty("--opac", o);
		// jQuery Function Number 1
		$.each($(".turnoff"), function() { $(this).html(ch.repeat($(this).html().length)) });
		if (ind || huevo) {
			if (ind) {
				// jQuery Function Number 2
				$.each($(".ze"), function() { $(this).text(ch.repeat($(this).text().length)) });
			}
			if (e) {
				// jQuery Function Number 3
				$("#egg").show();
			} else {
				// jQuery Function Number 4
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
			change("black", "white", .94, "0", false);
		}
	}
	// jQuery Function Number 5
	$(".turnoff").click(off);
	// jQuery Function Number 6
	$(".turnoff").hover(off);
	$(".turnon").click(on);
	$(".turnon").hover(on);
});
