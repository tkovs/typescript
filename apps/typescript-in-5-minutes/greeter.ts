interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;

    // The use of public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.
    constructor(public firstName: string, public middleName: string, public lastName: string) {
        this.fullName = `${firstName} ${middleName} ${lastName}`;
    }
}

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

let user = new Student("João Vitor", "Rodrigues", "da Silva");

document.body.innerHTML = greeter(user);