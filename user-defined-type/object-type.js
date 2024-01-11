// declaring object
var user1;
user1 = { name: "sieam", role: 55 };
// declaring array of object
var users;
users = [{ name: "sieam" }, { name: "sadi" }];
// declaring object types
var user2;
user2 = { userName: "srs sieam", userId: 101 };
// errors
// user2 = {userName: "srs sieam"};  // userId is missing
// declaring object types with optional chaining
var user3;
user3 = { userName: "srs sieam" }; // now it will be ok if userId is missing
var allUsers;
allUsers = [];
var userNo1;
userNo1 = { userName: "sieam", userId: 55 };
allUsers.push(userNo1);
var userNo2;
userNo2 = { userName: "sadi", userId: 50 };
allUsers.push(userNo2);
console.log(allUsers);
