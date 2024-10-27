document.getElementById("burger").addEventListener("click", function () {
	var nav = document.getElementById("nav");
	nav.style.display = "flex";

	setTimeout(function () {
		nav.style.transform = "translateX(0%)";
	}, 1);
});

document.getElementById("fermer").addEventListener("click", function () {
	var nav = document.getElementById("nav");
	nav.style.transform = "translateX(100%)";
	setTimeout(function () {
		nav.style.display = "none";
	}, 400);
});

document.addEventListener("DOMContentLoaded", function () {
	var charly_btn = document.getElementById("charly_btn");
	var anges_btn = document.getElementById("anges_btn");
	var charly = document.getElementById("charly");
	var anges = document.getElementById("anges");
	var charly_table = document.getElementById("charly_table");
	var anges_table = document.getElementById("anges_table");
	var style_page = document.getElementById("stylepage");
	var style_prof = document.getElementById("styleprof");
	style_page.checked = true;
	anges.style.display = "none";
	anges_table.style.display = "none";
	charly_table.style.display = "none";

	charly_btn.addEventListener("click", function () {
		if (style_page.checked) {
			charly.style.display = "flex";
			anges.style.display = "none";
		} else if (style_prof.checked) {
			charly_table.style.display = "flex";
			anges_table.style.display = "none";
		}
		setButtonStyles(charly_btn, anges_btn);
	});

	anges_btn.addEventListener("click", function () {
		if (style_page.checked) {
			anges.style.display = "flex";
			charly.style.display = "none";
		} else if (style_prof.checked) {
			anges_table.style.display = "flex";
			charly_table.style.display = "none";
		}
		setButtonStyles(anges_btn, charly_btn);
	});

	style_page.addEventListener("change", function () {
		if (style_page.checked) {
			charly_table.style.display = "none";
			anges_table.style.display = "none";
			charly.style.display = "flex";
			anges.style.display = "none";
			setButtonStyles(charly_btn, anges_btn);
		}
	});

	style_prof.addEventListener("change", function () {
		if (style_prof.checked) {
			charly.style.display = "none";
			anges.style.display = "none";
			charly_table.style.display = "flex";
			anges_table.style.display = "none";
			setButtonStyles(charly_btn, anges_btn);
		}
	});

	function setButtonStyles(activeBtn, inactiveBtn) {
		activeBtn.style.backgroundColor = "#8c7851";
		activeBtn.style.color = "#fffffe";
		inactiveBtn.style.color = "#8c7851";
		inactiveBtn.style.backgroundColor = "#fffffe";
	}
});
