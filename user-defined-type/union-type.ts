let userID: string | number | boolean;

// now you can put string, number or boolean.
userID = 101;
userID = "101";
userID = true;

function displayUserInfo(id: string | number){
    console.log(id)
}

displayUserInfo("101");
displayUserInfo(101);