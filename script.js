class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }


    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return this.firstName + " è più vecchio di " + otherUser.firstName;
        } else if (this.age < otherUser.age) {
            return this.firstName + " è più giovane di " + otherUser.firstName;
        } else {
            return this.firstName + " e " + otherUser.firstName + " hanno la stessa età";
        }
    }
}


const user1 = new User("Mario", "Rossi", 30, "Roma");
const user2 = new User("Luigi", "Bianchi", 25, "Milano");


console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1)); 