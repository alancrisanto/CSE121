// courses.js
const aCourse = {
	code: "CSE121b",
	name: "Javascript Language",
	sections: [
		{ sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
		{ sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" },
	],
	enrollStudent: function (sectionNum) {
		const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
		if (sectionIndex >= 0) {
			this.sections[sectionIndex].enrolled++;
			displaySections(this.sections);
		}
	},
	dropStudent: function (sectionNum) {
		const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
		if (sectionIndex >= 0) {
			this.sections[sectionIndex].enrolled--;
			displaySections(this.sections);
		}

		// Line 9 to 20 could be improve with this code:
		// changeEnrollment: function (sectionNum, add = true) {
		// 	// find the right section...Array.findIndex will work her e
		// 	const sectionIndex = this.sections.findIndex(
		// 		(section) => section.sectionNum == sectionNum
		// 	);
		// 	if (sectionIndex >= 0) {
		// 		if (add) {
		// 			this.sections[sectionIndex].enrolled++;
		// 		} else {
		// 			this.sections[sectionIndex].enrolled--;
		// 		}
		// 		renderSections(this.sections);
		// 	}
		// }
	},
};

// courseName
// courseCode

const displayName = (code, name) => {
	const courseName = document.querySelector("#courseName");
	const courseCode = document.querySelector("#courseCode");

	courseCode.textContent = code;
	courseName.textContent = name;
};

const displaySections = (sections) => {
	const table = sections.map(
		(section) => `<tr>
                      <td>${section.sectionNum}</td>
                      <td>${section.roomNum}</td>
                      <td>${section.enrolled}</td>
                      <td>${section.days}</td>
                      <td>${section.instructor}</td>
                  </tr>`,
	);
	document.querySelector("#sections").innerHTML = table.join("");
};

document.querySelector("#enrollStudent").addEventListener("click", () => {
	const sectionNum = document.querySelector("#sectionNumber").value;
	aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
	const sectionNum = document.querySelector("#sectionNumber").value;
	aCourse.dropStudent(sectionNum);
});

displayName(aCourse.code, aCourse.name);
displaySections(aCourse.sections);
