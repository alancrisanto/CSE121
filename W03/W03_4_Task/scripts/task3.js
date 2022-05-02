/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2

function add(num1, num2) {
	return num1 + num2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum

function addNumbers() {
	const addend1 = document.querySelector("#addend1").value;
	const addend2 = document.querySelector("#addend2").value;
	const sum = add(+addend1, +addend2);
	return (document.querySelector("#sum").value = +sum.toFixed(2));
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

const addNumbersButton = document.querySelector("#addNumbers");
addNumbersButton.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

const subtract = function (num1, num2) {
	return num1 - num2;
};

const subtractNumbers = function () {
	const minuend = document.querySelector("#minuend").value;
	const subtrahend = document.querySelector("#subtrahend").value;
	const difference = subtract(+minuend, +subtrahend);
	return (document.querySelector("#difference").value = +difference.toFixed(2));
};

const subtractButton = document.querySelector("#subtractNumbers");
subtractButton.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply = (num1, num2) => {
	return num1 * num2;
};

const mulitplyNumbers = () => {
	const factor1 = document.querySelector("#factor1").value;
	const factor2 = document.querySelector("#factor2").value;
	const product = multiply(+factor1, +factor2);
	return (document.querySelector("#product").value = +product.toFixed(2));
};

const multiplyButton = document.querySelector("#multiplyNumbers");
multiplyButton.addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const divide = (num1, num2) => {
	return num1 / num2;
};

const divideNumbers = () => {
	const dividend = document.querySelector("#dividend").value;
	const divisor = document.querySelector("#divisor").value;
	const quotient = divide(+dividend, +divisor);
	return (document.querySelector("#quotient").value = quotient.toFixed(2));
};

const divideButton = document.querySelector("#divideNumbers");
divideButton.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date();

// Step 2: Declare a variable to hold the current year

let currentYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = date.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").textContent = currentYear;
/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let startNumber = 1;
let lastNumber = 25;
const numbers = [];
for (let i = startNumber; i <= lastNumber; i++) {
	numbers.push(i);
}
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.querySelector("#array").textContent = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddNumbers = numbers.filter((odds) => {
	if (odds % 2 === 1) {
		return `${odds}`;
	}
});

document.querySelector("#odds").textContent = oddNumbers;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

const evenNumbers = numbers.filter((evens) => {
	if (evens % 2 === 0) {
		return `${evens}`;
	}
});

document.querySelector("#evens").textContent = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

const sum = numbers.reduce((num1, num2) => num1 + num2);
document.querySelector("#sumOfArray").textContent = sum;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

const multiplied = numbers.map((number) => {
	return number * 2;
});

document.querySelector("#multiplied").textContent = multiplied;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

const sumOfMultiplied = multiplied.reduce((num1, num2) => num1 + num2);

document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;
