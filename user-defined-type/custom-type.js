// this is lengthy process. every time you are to declare same object type
// let allUsers: object[];
// allUsers = [];
var allUsers;
allUsers = [];
var userNo1;
userNo1 = { userName: "sieam", userId: 55 };
allUsers.push(userNo1);
var userNo2;
userNo2 = { userName: "sadi", userId: 50 };
allUsers.push(userNo2);
var userNo3;
userNo3 = { userName: "roni", userId: 40 };
allUsers.push(userNo3);
console.log(allUsers);
var getRequest;
getRequest = "GET";
function RequestHandler(requestType) {
    console.log(requestType);
}
RequestHandler("GET");
