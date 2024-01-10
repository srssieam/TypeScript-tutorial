// let userNames: string[];
// alternative 
let userNames: Array<string>;
let userIds: number[];

userNames = ['sieam', 'sadi', 'ronnie'];
userNames.sort();
console.log(userNames)
console.log(userNames[0]);

// errors
// userNames = [20, 'sadi', 'ronnie'];


let multipleTypes : (string|number)[];
multipleTypes = [1, "name"]

