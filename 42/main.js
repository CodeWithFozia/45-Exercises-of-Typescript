// Define the function to show magicians names.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map()it will modify array.
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names.
var magicians_names = ["Harry poter", "Ali", "Zain"];
// call make_great function to modify magicians names.
var great_magicians = make_great(magicians_names);
// call show_madgicians that show modified list of magicians.
show_magicians(great_magicians);
