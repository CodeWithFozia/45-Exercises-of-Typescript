let friendsName= ["Aliya","Mariyam","Abida","Sonia"];
friendsName.forEach(friendname => console.log(friendname));

let friendname= ["Aliya","Mariyam","Abida","Sonia"];
friendname.forEach(friendName=>-console.log(`Hello ${friendName},How are you?`));

let transportationModes=["Bus","Sportcar","Bus","Bike","SportBike"];
transportationModes.forEach(Mode=>console.log(`I Would like to own a ${Mode}`));

let guestList=["Amna","Sunbal","Bushra","Komal"];
guestList.forEach(oneGuest=>console.log(`Salam ${oneGuest},Would you like to dinner with me?`));

let guestlist=["Amna","Sunbal","Bushra","Komal"];
let dontCome = guestlist[0];
console.log(dontCome,"is not coming");
guestlist.splice(0,1,"Sajjida");
guestlist.forEach(guest=>console.log(`Salam ${guest},Would you like to Dinner with me?`));