// Making a Function.
function Make_Shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I Love Type Script"; }
    console.log("creating a ".concat(size, "shirt with the ").concat(printMessage, "prints on shirt"));
}
// Calling a function with by_deyfault values.
Make_Shirt();
// Calling a function now with medium size and default Message.
Make_Shirt("Medium");
// calling a function now with small size and also Different print Message.
Make_Shirt("small", "I Love Javascript");
