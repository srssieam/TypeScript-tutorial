var Users = /** @class */ (function () {
    function Users(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Users.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return Users;
}());
// class object
var user1 = new Users("sieam", 24);
user1.display();
var user2 = new Users("sadi", 23);
user2.display();
