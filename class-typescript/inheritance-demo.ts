// parent class
class Users {
    // properties, methods, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`)
    }
}

// child class
// inheritance
class Student extends Users{
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`)
    }
}

let student1 = new Student("Roni", 23, 1302020015);
student1.display();

// let user1= new Users("sieam", 24);
// user1.display();

// let user2= new Users("sadi", 23);
// user2.display();
