// creating a Guest List Array
let guestList=["Aliya", "Mariyam", "Abida","Sonia"];
//Making variable for those guest who cant come.
let dontcome= guestList[0];
// print the name of guest who cant come.
console.log(dontcome,"is not coming");
// Add or remove values from GuestList Array
guestList.splice(0,1,"Sajjida");
// Message print for Bigger Table
console.log("Good News! We have found a Bigger Table For Dinner");
// Adding a new value at Starting index of array
guestList.unshift("saleem");
// Adding a new values at ending index of array
guestList.push("Amir");
// Get a Middle index of our guestList array
let MiddleIndex:number=Math.floor(guestList.length/2);
// Adding a new guest to Middle index of array.
guestList.splice(MiddleIndex,0,"Waleed");
// print Message of updated List
console.log("Updated List of our Guests");
// Sending a invitation Message to our guests one by one with their names.
guestList.forEach(oneguest=>console.log(`Salam ${oneguest},Would you like to dinner with Me?`)); 