// Making a Function.
function Make_Shirt(size:string="large",printMessage:string="I Love Type Script"){
 console.log(`creating a ${size}shirt with the ${printMessage}prints on shirt`)   
}
// Calling a function with by_deyfault values.
Make_Shirt();
// Calling a function now with medium size and default Message.
Make_Shirt("Medium")
// calling a function now with small size and also Different print Message.
Make_Shirt("small","I Love Javascript")