//Mixins in TypeScript provide a way to share functionality between classes without using inheritance. They are implemented using interfaces and classes, with methods and properties being mixed in using Object.assign. While this approach can be powerful, it requires careful consideration of type safety and potential side effects from prototype manipulation.


// Define a mixin interface
interface CanSayHello {
    sayHello(): void;
}

// Implement the mixin
class HelloMixin implements CanSayHello {
    sayHello() {
        console.log("Hello, world!");
    }
}

// Use the mixin in a class
class Person {
    constructor(public name: string) {}
}

// Mix in the HelloMixin into Person
const personWithHello = Object.assign(Person.prototype, HelloMixin.prototype);

// Create an instance of Person and use the mixed-in method
const person = new Person("Alice");
personWithHello.sayHello.call(person); // Output: Hello, world!
