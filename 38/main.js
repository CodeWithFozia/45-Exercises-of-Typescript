// Describe a Function.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("$(city) is in ".concat(country));
}
// Calling the function.
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
