class Animal {
    constructor(public name: string) {
        console.log(`Animal created: ${name}`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name); // Calls the constructor of the parent class (Animal)
        console.log(`Dog created: ${name}`);
    }
}

const myDog = new Dog("Buddy");
// Output:
// Animal created: Buddy
// Dog created: Buddy
