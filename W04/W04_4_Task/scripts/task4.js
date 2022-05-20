/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

let myInfo;

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo = { name: "Alan" };
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = "images/myImage.png";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ["Chaufa", "Pizza", "Ceviche", "Hamburguer"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["Play Guitar", "Watch Animes", "Travel"];
// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived = [
	{ place: "Piura", Length: "18 years" },
	{ place: "Talara", Length: "2 years" },
	{ place: "Puno", Length: "3 years" },
];

console.log(myInfo);

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = myInfo.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").alt = myInfo.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

myInfo.favoriteFoods.map((food) => {
	let li = document.createElement("li");
	li.textContent = food;
	document.querySelector("#favorite-foods").appendChild(li);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

const hobbies = myInfo.hobbies.map((hobby) => {
	let li = document.createElement("li");
	li.textContent = hobby;
	document.querySelector("#hobbies").appendChild(li);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

const places = myInfo.placesLived.map((place) => {
	let tr = document.createElement("tr");
	let tdPlace = document.createElement("td");
	let tdLength = document.createElement("td");

	tdPlace.textContent = place.place;
	tdLength.textContent = place.Length;

	tr.appendChild(tdPlace);
	tr.appendChild(tdLength);

	document.querySelector("table").appendChild(tr);
});
