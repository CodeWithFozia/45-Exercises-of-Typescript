// Define a function with a rest parameter that accept items arguments representing our sandwich.
function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nNow Enjoy Sandwich");
}
//call the function 3 times with 3 different number of arguments.
makesandwich("Chicken", "Cheese", "Mayo", "Egg");
makesandwich("Bread", "Butter");
makesandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "lettuce", "Tomato");
