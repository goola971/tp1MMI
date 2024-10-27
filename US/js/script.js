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
	var openmap = document.getElementById("bouton_openmap");
	var map = document.getElementById("map_etudiants");
	var fermer_map = document.getElementById("fermer_map");

	anges.style.display = "none";
	charly_btn.addEventListener("click", function () {
		setButtonStyles(charly_btn, anges_btn);
		charly.style.display = "flex";
		anges.style.display = "none";
	});
	anges_btn.addEventListener("click", function () {
		setButtonStyles(anges_btn, charly_btn);
		anges.style.display = "flex";
		charly.style.display = "none";
	});
	openmap.addEventListener("click", function () {
		map.style.display = "flex";
	});
	fermer_map.addEventListener("click", function () {
		map.style.display = "none";
	});
	function setButtonStyles(activeBtn, inactiveBtn) {
		activeBtn.style.backgroundColor = "#8c7851";
		activeBtn.style.color = "#fffffe";
		inactiveBtn.style.color = "#8c7851";
		inactiveBtn.style.backgroundColor = "#fffffe";
	}
	anges_table.style.display = "none";
});

document.getElementById("fermer_desc").addEventListener("click", function () {
	var description = document.getElementById("description");
	var img = document.getElementById("img");
	var nom_ecole = document.getElementById("nom_ecole");
	var de = document.getElementById("de");
	var a = document.getElementById("a");
	var intro = document.getElementById("intro");
	description.style.display = "none";
	img.style.backgroundImage = "url('')";
	nom_ecole.innerHTML = "";
	de.innerHTML = "";
	a.innerHTML = "";
	intro.innerHTML = "";
});

function info(ecole) {
	var description = document.getElementById("description");
	var img = document.getElementById("img");
	var nom_ecole = document.getElementById("nom_ecole");
	var de = document.getElementById("de");
	var a = document.getElementById("a");
	var intro = document.getElementById("intro");
	var btn = document.getElementById("visiter_dsesc");
	if (ecole == "college") {
		img.style.backgroundImage = "url('../img/gravée.png')";
		nom_ecole.innerHTML = "Collège Les Roches gravées";
		de.innerHTML = "septembre 2016";
		a.innerHTML = "juin 2020";
		intro.innerHTML =
			"Le Collège Les Roches Gravées est un établissement public situé à Trois-Rivières en Guadeloupe, à l'adresse suivante : 1 rue Gerville Réache, 97114 Trois-Rivières. C'est un collège qui propose des formations généralistes, des langues (comme l'anglais, l'espagnol, et même des langues anciennes comme le latin et le grec), ainsi qu'un dispositif sportif. Il accueille environ 344 élèves et est dirigé par Mme Catherine Decilap. L'établissement ne dispose pas d'internat, donc l'hébergement n'est pas proposé aux élèves";
		btn.addEventListener("click", function () {
			window.location.href = "https://rochesgravees.clg.ac-guadeloupe.fr";
		});
	} else if (ecole == "lycee") {
		img.style.backgroundImage = "url('../img/cugnot.jpg')";
		nom_ecole.innerHTML = "Lycee Nicolas Joseph Cugnot";
		de.innerHTML = "septembre 2020";
		a.innerHTML = "juin 2023";
		intro.innerHTML =
			"Le lycée Nicolas-Joseph Cugnot, situé à Neuilly-sur-Marne (93), est un établissement polyvalent qui propose trois types de formations : générale, technologique (STI2D), et professionnelle. Il prépare à différents diplômes, notamment le baccalauréat général, technologique, et professionnel, ainsi qu'au CAP et au BTS dans des filières telles que la maintenance des véhicules et la réparation des carrosseries.";

		btn.addEventListener("click", function () {
			window.location.href = "https://www.lyceecugnot.fr";
		});
	} else if (ecole == "univ") {
		img.style.backgroundImage = "url('../img/meau.avif')";
		nom_ecole.innerHTML = "Université Gustave Eiffel";
		de.innerHTML = "septembre 2024";
		a.innerHTML = "aujourd'hui";
		intro.innerHTML =
			"L'Université Gustave Eiffel, fondée en 2020, résulte de la fusion de l'Université Paris-Est Marne-la-Vallée et de l'IFSTTAR. Elle se concentre sur l'urbanisme durable et l'adaptation des territoires, en intégrant des écoles d'ingénieurs et d'architecture. Avec une approche interdisciplinaire, l'université propose des formations allant des DUTs aux doctorats, tout en favorisant l'apprentissage en alternance et en développant des partenariats nationaux et internationaux​";

		btn.addEventListener("click", function () {
			window.location.href = "https://www.univ-gustave-eiffel.fr/";
		});
	} else if (ecole == "college_an1") {
		img.style.backgroundImage = "url('../img/anges_etudes/college1.jpg')";
		nom_ecole.innerHTML = "Collège Pablo Neruda";
		de.innerHTML = "NA";
		a.innerHTML = "NA";
		intro.innerHTML =
			"Le collège Pablo Neruda à Aulnay-sous-Bois est un établissement public situé dans l'académie de Créteil, au 4 rue du Docteur Fleming. Il se distingue par ses initiatives visant à offrir une éducation de qualité, même dans des quartiers souvent perçus comme défavorisés, avec un objectif clair de montrer que l'excellence y est également possible. Le collège propose notamment des projets culturels, comme des ateliers d'arts plastiques et de cinéma, ainsi que des activités sportives variées, notamment le rugby, où ses équipes ont brillé dans des compétitions régionales et nationales​";
		btn.addEventListener("click", function () {
			window.location.href =
				"https://neruda-stains.webcollege.seinesaintdenis.fr/";
		});
	} else if (ecole == "college_an2") {
		img.style.backgroundImage = "url('../img/anges_etudes/college2.jpg')";
		nom_ecole.innerHTML = "Collège Denis Diderot";
		de.innerHTML = "NA";
		a.innerHTML = "NA";
		intro.innerHTML =
			"Le Collège Diderot à Massy est un établissement public accueillant environ 710 élèves. Il propose une section sportive et une unité pour l'inclusion scolaire (ULIS), mais pas d'internat. En 2021, le taux de réussite au brevet était de 82,9 %, avec 63,8 % de mentions";
		btn.addEventListener("click", function () {
			window.location.href = "https://www.college-diderot-massy.fr/";
		});
	} else if (ecole == "college_an3") {
		img.style.backgroundImage = "url('../img/anges_etudes/college3.jpg')";
		nom_ecole.innerHTML = "Collège Les Mousseaux";
		de.innerHTML = "NA";
		a.innerHTML = "NA";
		intro.innerHTML =
			"Le Collège Les Mousseaux à Villepinte est un établissement public situé au 239 boulevard Robert Ballanger. Il propose des formations générales, des options linguistiques (allemand, anglais, espagnol, latin), ainsi qu'une unité pour l'inclusion scolaire (ULIS). Le collège se distingue par ses efforts pour favoriser l'accessibilité et l'inclusion, en mettant en place des dispositifs adaptés pour les élèves en situation de handicap​";
		btn.addEventListener("click", function () {
			window.location.href =
				"https://lesmousseaux-villepinte.webcollege.seinesaintdenis.fr/";
		});
	} else if (ecole == "lycee_an") {
		img.style.backgroundImage = "url('../img/anges_etudes/lycée.jpg')";
		nom_ecole.innerHTML = "Lycée Voillaume";
		de.innerHTML = "NA";
		a.innerHTML = "NA";
		intro.innerHTML =
			"Le Lycée Voillaume d'Aulnay-sous-Bois est un établissement polyvalent qui offre un large éventail de formations, y compris des filières générales, technologiques et professionnelles. Il propose notamment des options dans les domaines du cinéma audiovisuel, des sciences industrielles (STI2D), de la gestion (STMG), et dispose d'une section européenne. Le lycée accueille aussi un internat pour les élèves souhaitant bénéficier d'un encadrement supplémentaire. En plus de son offre en Bac général et technologique, le lycée propose des BTS, renforçant ainsi sa diversité de formations​";
		btn.addEventListener("click", function () {
			window.location.href = "https://www.lyceevoillaume.fr/";
		});
	}
	description.style.display = "flex";
}

function ouvrir_map() {
	// console.log("Fonction ouvrir_map appelée"); c t pour tester
	var map = document.getElementById("map_etudiants");
	map.style.display = "flex";
}

function fermer_map() {
	var map = document.getElementById("map_etudiants");
	map.style.display = "none";
}
