const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();

	/// Second Hand
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	// Minute hand
	const minutes = now.getMinutes();
	const minuteDegrees = ((minutes / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

	// Hour hand
	const hours = now.getHours();
	const hourDegrees = ((hours / 60) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);