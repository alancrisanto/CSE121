let medications = {
	"Lactated Ringers": { id: "13ab7", amount: 100, amountType: "L", expDate: "12/30/2029" },
	Levothyroxine: { id: "at342", amount: 2000, amountType: "ct", expDate: "03/18/2021" },
	Rosuvastatin: { id: "gr5423", amount: 1500, amountType: "ct", expDate: "09/01/2020" },
	Albuterol: { id: "iuy6532", amount: 1325, amountType: "ct", expDate: "01/01/2023" },
	Esomeprazole: { id: "mnb78932", amount: 23145, amountType: "ct", expDate: "10/01/2021" },
};

let aMedication = medications["Lactated Ringers"];
console.log(aMedication);
console.log(aMedication.id);
console.log(medications.Levothyroxine.expDate);
