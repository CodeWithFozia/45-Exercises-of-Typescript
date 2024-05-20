// Creating a array
var userNames = ["Sara", "Sana", "Maha", "Admin", "Aiza"];
// Using ForEach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
// Creating a array with 5 values
var usernames = ["Sara", "Sana", "Maha", "Admin", "Aiza"];
// Remove all values from our Array now our Array is empty
usernames = [];
// If Statement for checking length of our array is empty?
if (usernames.length === 0) {
    console.log("Your array in empty We need to find some users!");
}
else {
    // If array is not empty use ForEach loop on Array
    usernames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
