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

// class object

let user1= new Users("sieam", 24);
user1.display();

let user2= new Users("sadi", 23);
user2.display();
