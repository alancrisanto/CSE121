const PI = 3.14;
let area = 0;

function circleArea(radius) {
	const area = radius * radius * PI;
	return area;
}
area = circleArea(3);
console.log("this is area1", area);
area = circleArea(6);
console.log("This is area2", area);
