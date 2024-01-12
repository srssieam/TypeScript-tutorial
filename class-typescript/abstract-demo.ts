// abstract class
abstract class Users {
    // properties, methods, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    // abstract method
    abstract display(): void;
}

// child class
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