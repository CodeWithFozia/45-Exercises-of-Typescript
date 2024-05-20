// Define a function with a rest parameter that accept items arguments representing our sandwich.
function makesandwich(...items:string[]){
console.log("\nMaking a sandwich with the following items:\n");
items.forEach(singleitem => console.log(singleitem));
console.log("\nNow Enjoy Sandwich");    
}

//call the function 3 times with 3 different number of arguments.
makesandwich("Chicken","Cheese","Mayo","Egg");
makesandwich("Bread","Butter");
makesandwich("Bread","Butter","Mayo","Egg","Cheese","Chicken","lettuce","Tomato");
