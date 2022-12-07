setInterval(function () {
	let istanbulElement = document.querySelector("#istanbul");
	let istanbulDate = istanbulElement.querySelector(".date");
	let istanbulTime = istanbulElement.querySelector(".time");

	istanbulDate.innerHTML = moment()
		.tz("Europe/Istanbul")
		.format("MMMM Do YYYY");

	istanbulTime.innerHTML = moment()
		.tz("Europe/Istanbul")
		.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function () {
	let seattleElement = document.querySelector("#seattle");
	let seattleDate = seattleElement.querySelector(".date");
	let seattleTime = seattleElement.querySelector(".time");

	seattleDate.innerHTML = moment()
		.tz("America/Vancouver")
		.format("MMMM Do YYYY");

	seattleTime.innerHTML = moment()
		.tz("America/Vancouver")
		.format("h:mm:ss [<small>]A[</small>]");
}, 1000);
