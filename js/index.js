

const counter = document.querySelector(".counter-number");
async function updateCounter(){
	let response = await fetch("https://dvwnqratyq32egzuforns33rgm0gttab.lambda-url.us-east-2.on.aws/");
	let data = await response.json();
	counter.innerHTML = `Profile Views: ${data}`;
	}
	updateCounter();