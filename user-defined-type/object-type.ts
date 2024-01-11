// declaring object
let user1: object;
user1 = { name: "sieam", role: 55 }

// declaring array of object
let users: object[];
users = [{ name: "sieam" }, { name: "sadi" }]

// declaring object types
let user2: {userName: string, userId: number};
user2 = {userName: "srs sieam", userId: 101};

// errors
// user2 = {userName: "srs sieam"};  // userId is missing


// declaring object types with optional chaining
let user3: {userName: string, userId?: number};
user3 = {userName: "srs sieam"};  // now it will be ok if userId is missing


let allUsers: object[];
allUsers = [];

let userNo1 : { userName: string, userId: number };
userNo1 = { userName:"sieam", userId: 55 }
allUsers.push(userNo1)

let userNo2 : { userName: string, userId: number };
userNo2 = { userName:"sadi", userId: 50 }
allUsers.push(userNo2)

console.log(allUsers)