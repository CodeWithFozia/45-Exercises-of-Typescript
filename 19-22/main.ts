let guestList=["Aliya","Abida","Sonia","Mariyam"];
let lengthGuests: number=guestList.length;
console.log(`We are Inviting total ${lengthGuests}guests.`);

// Making a Programming Languages Array.
let Programminglanguages:string[]=["Typescript","javaScript","Python","PHP"];
// pRINT THE Message of List.
console.log("List of programminglanguages");
// Print the value of Array in the form of List.
Programminglanguages.forEach(Language=>console.log(Language));

interface itCourse {
courseName: String;
Location: String;
onsitestudents: Number;
}
let itcourse={
courseName:"Typesscript and javascript",
Location: "Governor House Sindh",
onSitestudents:50000
};
console.log(itcourse);

// Creating a Array.
let errorArray:String[]=["A","B","C","D"];
// producing error!By Accessing invalid index of array.
console.log(errorArray[10]);
// Error Removed.
console.log(errorArray[1]);




