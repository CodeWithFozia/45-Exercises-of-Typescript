// Making a Array of countries and print its original order.
let countriesVisit: string[]=["China"," Dubai","Brazil","Austrailia"];
console.log("original order:",countriesVisit);
// print the Array in Alphabetical order without Modifying the Actual Array List.
console.log("Alphabetical order:",[...countriesVisit].sort());
// Show that the Array is still in its original order.
console.log("Still in Original Order:",countriesVisit);
// Print the Array in reversed order without Modifying the Actual Array List.
console.log("Reverse order:",[...countriesVisit].reverse());
// Show that the array is still in its original order.
console.log("Still in Original order:",countriesVisit);
// We have changed th original Array order now.
console.log("Original Array Reversed:",countriesVisit.reverse());
// Print the array to show that it's back to its original order.
console.log("Back to originalorder:",countriesVisit.reverse());
// Print the array to show that its order has been changed in Alphabetical order now.
console.log("Sorted in Alphabetical order:",countriesVisit.sort());
// We have changed again the original array order now in reverse order again.
console.log("OriginalArray ReversedAgain:",countriesVisit.reverse());
