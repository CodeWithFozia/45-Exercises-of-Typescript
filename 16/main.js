// creating a Guest List Array
var guestList = ["Aliya", "Mariyam", "Abida", "Sonia"];
//Making variable for those guest who cant come.
var dontcome = guestList[0];
// print the name of guest who cant come.
console.log(dontcome, "is not coming");
// Add or remove values from GuestList Array
guestList.splice(0, 1, "Sajjida");
// Message print for Bigger Table
console.log("Good News! We have found a Bigger Table For Dinner");
// Adding a new value at Starting index of array
guestList.unshift("saleem");
// Adding a new values at ending index of array
guestList.push("Amir");
// Get a Middle index of our guestList array
var MiddleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to Middle index of array.
guestList.splice(MiddleIndex, 0, "Waleed");
// print Message of updated List
console.log("Updated List of our Guests");
// Sending a invitation Message to our guests one by one with their names.
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",Would you like to dinner with Me?")); });
