// built-in type: number, string, boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string
let isActivated: boolean;

userId = 101;
firstName = "srs";
lastName = " sieam";
isActivated = true;
fullName = firstName.concat(lastName);

console.log(`Your id: ${userId}, username: ${fullName}, account activated: ${isActivated}`);
console.log(fullName.split(" "));

function display () : void {       // void means this function do not return anything
    console.log("Hi I am display")
}
display();


// errors
console.log(userId.toLowerCase());
