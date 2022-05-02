const fruits = ["Apple", "Lemon", "Banana", "Pineapple", "orange"];

const fruitString = fruits.join(", ");
console.log(fruitString);
console.log(fruits.splice(-3));
console.log(fruits);
for (const fruit of fruits) {
	console.log(fruit);
}

fruits.forEach(function (item, index) {
	console.log(item, index);
});

// USe Events
const buttonElement = document.querySelector("#submitButton");

function copyInput(event) {
	console.log(event);
	const inputElement = document.querySelector("#inputBox");
	let outputElement = document.querySelector("#output");
	outputElement.innerHTML = inputElement.value;
}

buttonElement.addEventListener("click", copyInput);

const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
	// console.log(e);
	console.log(e.code);
	console.log(e.key);
	console.log(e.keyCode);
}
