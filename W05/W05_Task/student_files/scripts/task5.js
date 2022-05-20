/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

const actualDate = new Date();
console.log(actualDate);

const dayOfTheWeek = actualDate.getDay();
console.log(dayOfTheWeek);

// Step 4: Declare a variable to hold a message that will be displayed
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

let messageToDisplay;

if (dayOfTheWeek <= 5) {
	messageToDisplay = "Hang in there!";
	console.log(messageToDisplay);
} else {
	messageToDisplay = "Woohoo! It is the weekend!";
	console.log(messageToDisplay);
}

/* SWITCH, CASE, BREAK */
// Step 1: Declare a new variable to hold another message
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

let messageToDisplay2;

switch (dayOfTheWeek) {
	case 1:
		messageToDisplay2 = "Monday";
		break;
	case 2:
		messageToDisplay2 = "Tuesday";
		break;
	case 3:
		messageToDisplay2 = "Wednesday";
		break;
	case 4:
		messageToDisplay2 = "Thursday";
		break;
	case 5:
		messageToDisplay2 = "Friday";
		break;
	case 6:
		messageToDisplay2 = "Saturday";
		break;
	case 7:
		messageToDisplay2 = "Sunnday";
		break;
	default:
		break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

document.querySelector("#message1").textContent = messageToDisplay;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

document.querySelector("#message2").textContent = messageToDisplay2;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples

let templesList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

const output = (temples) => {
	temples.map((temple) => {
		const article = document.createElement("article");
		const templeName = document.createElement("h3");
		const templeLocation = document.createElement("h4");
		const templeDedicated = document.createElement("h4");
		const templeImage = document.createElement("img");

		templeName.textContent = temple.templeName;
		templeLocation.textContent = temple.location;
		templeDedicated.textContent = temple.dedicated;
		templeImage.src = temple.imageUrl;
		templeImage.alt = temple.templeName;

		article.appendChild(templeName);
		article.appendChild(templeLocation);
		article.appendChild(templeDedicated);
		article.appendChild(templeImage);

		document.querySelector("#temples").appendChild(article);
	});
};

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

const getTemples = async () => {
	const data = await fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json");

	templesList = await data.json();
	output(templesList);
};

getTemples();

console.log(templesList);

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset = () => {
	document.querySelector("#temples").innerHTML = "";
};
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

const sortBy = () => {
	reset();
	const sorted = document.querySelector("#sortBy").value;

	if (sorted === "templeNameAscending") {
		output(
			templesList.sort((a, b) => {
				let x = a.templeName.toLowerCase();
				let y = b.templeName.toLowerCase();
				return x === y ? 0 : x > y ? 1 : -1;
			}),
		);
	} else {
		output(
			templesList.sort((a, b) => {
				let x = a.templeName.toLowerCase();
				let y = b.templeName.toLowerCase();
				return x === y ? 0 : x > y ? -1 : 1;
			}),
		);
	}
};

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change", sortBy);
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
