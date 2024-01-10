// built-in type: number, string, boolean, void, undefined, null
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "srs";
lastName = " sieam";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("Your id: ".concat(userId, ", username: ").concat(fullName, ", account activated: ").concat(isActivated));
console.log(fullName.split(" "));
function display() {
    console.log("Hi I am display");
}
display();
// errors
console.log(userId.toLowerCase());
