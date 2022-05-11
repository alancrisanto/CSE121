/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

let myInfo;

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo = { name: "Alan" };
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = "./images/myImage.png";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ["Chaufa", "Pizza", "Ceviche", "Hamburguer"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["Play Guitar", "Watch Animes", "Travel"];
// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.placesLived.push({ place: "", Length: "" });
// Step 8: For each property, add appropriate values as strings
myInfo.placesLived[0].place = "Piura";
myInfo.placesLived[0].Length = "18 years";
// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived.push({ place: "Talara", Length: "2 years" }, { place: "Puno", Length: "3 years" });
console.log(myInfo);

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = myInfo.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").alt = myInfo.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

const foodList = myInfo.favoriteFoods.map((food) => {
	return `<li>${food}</li>`;
});

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

document.querySelector("#favorite-foods").innerHTML = foodList.join("");

// Step 6: Repeat Step 4 for each hobby in the hobbies property

const hobbies = myInfo.hobbies.map((hobby) => {
	return `<li>${hobby}</li>`;
});

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

document.querySelector("#hobbies").innerHTML = hobbies.join("");

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

const places = myInfo.placesLived.map((place) => {
	return `<dt>${place.place}</dt>
          <dd>${place.Length}</dd>`;
});

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

document.querySelector("#places-lived").innerHTML = places.join("");
