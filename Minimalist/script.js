// Init All Functions
date();
time();
buttons();


//  *******************************************

// DATE AND TIME

// DISPLAY THE TIME WITH SEC COUNTING
function time() {

	let timeDisplay = document.getElementById("timeDisplay");

	setInterval(function () {

		const today = new Date();
		let h = today.getHours();
		let min = today.getMinutes();
		
		if (min < 10) {
			min = "0" + min;
		}

		let s = today.getSeconds();

		if (s < 10) {
			s = "0" + s;
		}

		timeDisplay.innerHTML = `${h}:${min}:${s}`;

	}, 1000);
}

// DISPLAY THE DATE
function date() {

	const today = new Date();
	let d = today.getDay();
	let dn = today.getDate();
	let m = today.getMonth();
	// let y = today.getFullYear();
	let currentDay = "";
	let currentMonth = "";
	let dateDisplay = document.getElementById("dateDisplay");

	switch (d) {

		case 0:
			currentDay = "Dimanche";
			break;
		case 1:
			currentDay = "Lundi";
			break;
		case 2:
			currentDay = "Mardi";
			break;
		case 3:
			currentDay = "Mercredi";
			break;
		case 4:
			currentDay = "Jeudi";
			break;
		case 5:
			currentDay = "Vendredi";
			break;
		case 6:
			currentDay = "Samedi";
			break;

		default:
			break;
	};

	switch (m) {
		case 0:
			currentMonth = "Janvier";
			break;
		case 1:
			currentMonth = "Février";
			break;
		case 2:
			currentMonth = "Mars";
			break;
		case 3:
			currentMonth = "Avril";
			break;
		case 4:
			currentMonth = "Mai";
			break;
		case 5:
			currentMonth = "Juin";
			break;
		case 6:
			currentMonth = "Juillet";
			break;
		case 7:
			currentMonth = "Août";
			break;
		case 8:
			currentMonth = "Septembre";
			break;
		case 9:
			currentMonth = "Octobre";
			break;
		case 10:
			currentMonth = "Novembre";
			break;
		case 11:
			currentMonth = "Décembre";
			break;

		default:
			break;
	};

	dateDisplay.innerHTML = `${currentDay} ${dn} ${currentMonth}`;
}

//  *******************************************

// BUTTONS

function buttons() {

	const categoryButtons = document.getElementsByClassName("categoryButton");

	const popUpColorsButton = document.getElementById("popUpColorsButton");
	const popUpColors = document.getElementById("popUpColors");

	const popUpImagesButton = document.getElementById("popUpImagesButton");
	const popUpImages = document.getElementById("popUpImages");

	const popupCloseButtons = document.getElementsByClassName("popupClose");

	const toolboxButton = document.getElementById("toolboxButton");

	// Icon Buttons
	for (const categoryButton of categoryButtons) {
		categoryButton.addEventListener("click", function() {
			// Show the category list of links and make link active (open)
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("hidden");
		});
	}

	// PopUpColorsButton
	popUpColorsButton.addEventListener("click", function() {
		// Show the popup windows and make link active (open)
		popUpColors.classList.toggle("hidden");
		this.classList.toggle("active");
	});

	// PopUpImagesButton
	popUpImagesButton.addEventListener("click", function() {
		// Show the popup windows and make link active (open)
		popUpImages.classList.toggle("hidden");
		this.classList.toggle("active");
	});

	// PopUpCloseButtons
	for (const popupClosebutton of popupCloseButtons) {
		popupClosebutton.addEventListener("click", function () {
			// Hide popup and make the link that opens it inactive (not open)
			this.parentElement.classList.toggle("hidden")
			this.parentElement.previousSibling.classList.toggle("active");
		});
	}

	// Close PopUp if toolbox category list is closed by clicking the toolbox button
	toolboxButton.addEventListener("click", function () {
		// Check if toolbox category list is open and if colors popup is open
		if (
			(toolboxButton.classList.contains("active") === false)
			&&
			(popUpColors.classList.contains("hidden") === false)
		) {
			// Check if image popup is also open
			if (popUpImages.classList.contains("hidden") === false) {
				// Close both popup windows and make links inactive (not open)
				popUpColors.classList.toggle("hidden");
				popUpColorsButton.classList.toggle("active");
				popUpImages.classList.toggle("hidden");
				popUpImagesButton.classList.toggle("active");
			}
			// If only colors popup is open, close it
			else {
				popUpColors.classList.toggle("hidden");
				popUpColorsButton.classList.toggle("active");
			}
		// Check if toolbox category list is open and if images popup is open
		} else if (
			(toolboxButton.classList.contains("active") === false)
			&&
			(popUpImages.classList.contains("hidden") === false)
		) {
			// Close image popup and make link inactive (not open)
			popUpImages.classList.toggle("hidden");
			popUpImagesButton.classList.toggle("active");
		}
	});
}

//  *******************************************

