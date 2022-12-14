moment()
	.tz("Asia/Istanbul")
	.format("[<strong> Gaziantep, TR:</strong>] dddd, MMMM D, YYYY hh:mm:ss A ");

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

function displayTime(event) {
	let displayElement = document.querySelector(".display");
	let location = event.target.value;
	let cityName = location.replace("-", " ").split("/")[1];
	let time = moment().tz(location);

	displayElement.innerHTML = `<div class="city"><div>
						<h2>${cityName}</h2>
						<div class="date">${time.format("MMMM Do YYYY")}</div>
					</div>
					<div class="time">${time.format("h:mm:ss [<small>]A[</small>]")}</div></div>`;
}

let city = document.querySelector("#cityMenu");
city.addEventListener("change", displayTime);
