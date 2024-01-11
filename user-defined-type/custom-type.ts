
// this is lengthy process. every time you are to declare same object type
// let allUsers: object[];
// allUsers = [];

// let userNo1 : { userName: string, userId: number };
// userNo1 = { userName:"sieam", userId: 55 }
// allUsers.push(userNo1)

// let userNo2 : { userName: string, userId: number };
// userNo2 = { userName:"sadi", userId: 50 }
// allUsers.push(userNo2)

// let userNo3 : { userName: string, userId: number };
// userNo3 = { userName:"roni", userId: 40 }
// allUsers.push(userNo3)

// console.log(allUsers)



// shortcut process using custom type
type User = { userName: string, userId: number };

let allUsers: User[];
allUsers = [];

let userNo1 : User;
userNo1 = { userName:"sieam", userId: 55 }
allUsers.push(userNo1)

let userNo2 : User;
userNo2 = { userName:"sadi", userId: 50 }
allUsers.push(userNo2)

let userNo3 : User;
userNo3 = { userName:"roni", userId: 40 }
allUsers.push(userNo3)

console.log(allUsers)

// another example
type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";

function RequestHandler (requestType: RequestType){
    console.log(requestType)
}
RequestHandler("GET");