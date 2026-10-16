class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

const person = new Person("khang");
console.log(person.greet()); // output: Hello, my name is khang