var current_users = ["Kinza", "Ayesha", "Minal", "Hina", "Amal"];
var new_users = ["Aiman", "Farwa", "Minal", "Sara", "Amal"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available."));
    }
});
