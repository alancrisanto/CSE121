// ***  Activity # 1 MAP
const value = ["one", "two", "three"];

const myList = document.querySelector("#myList");

const newList = value.map((list) => {
	return `<li >${list}</li>`;
});

myList.innerHTML = newList.join("");

// *** Activity # 2 MAP

const grades = ["A", "B", "A"];

const gpaPoints = grades.map((grade) => {
	console.log(grade);
	return grade === "A" ? 4 : 3;
});

console.log(gpaPoints);

// *** Activity #2 - Solution 2

// const grades = ["A", "B", "A"];
// function convertGradeToPoints(grade) {
// 	let points = 0;
// 	if (grade === "A") {
// 		points = 4;
// 	} else if (grade === "B") {
// 		points = 3;
// 	}
// 	return points;
// }
// const gpaPoints = grades.map(convertGradeToPoints);

// console.log(gpaPoints);

// *** Activity # 3 Reduce

const gpa = gpaPoints.reduce((previusValue, currentValue) => previusValue + currentValue) / gpaPoints.length;

console.log(gpa);

// Solution
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// *** Activity # 4 FILTER

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

const filterList = fruits.filter((fruit) => fruit.length > 6);

console.log(filterList);

// *** Activity # 5 indexOf

const numbers = [12, 34, 21, 54];

const luckNumber = 21;

numbers.indexOf(luckNumber) != -1 ? console.log("You are Lucky") : console.log("Is not your lucky day");
