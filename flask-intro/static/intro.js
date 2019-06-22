

console.log('Hello World from intro.js');

window.onload = onWindowHasLoaded;

// function onWindowHasLoaded() {
// 	console.log('The page has finished loading.');
// }

async function onWindowHasLoaded() {
	console.log('The page has finished loading.');
	let response;
	try {
		response = await fetch('/info');
		if (response.status != 200)
			throw 'Invalid HTTP Response:' + response.status;
		console.log('Response:', response);
	      const data = await response.text();
	      console.log('Data:', data);
	} catch (error) {
		console.log('*** We Have and error onWindowHasLoaded:', error);
		console.log('Response:', response);
	}
}

console.log("Good bye cruel world")