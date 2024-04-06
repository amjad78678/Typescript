interface Ivehicle {
  wheels: number;
  startEngine(): void;
}

class Vehicle implements Ivehicle {
  constructor(public wheels: number) {}

  startEngine(): void {
    console.log("Engine started now ");
  }
}

class Car extends Vehicle {
  constructor(wheels: number , color: string) {
    super(wheels);
  }
  honk():void{

    console.log('Honk Honk !---')
  }
}

const maruthi = new Car(4,'black');

maruthi.startEngine();
maruthi.honk()


//Polymorphism in TypeScript allows for more flexible and reusable code by enabling objects of different types to be treated as objects of a common type. This is achieved through interfaces, which define a contract for classes, and class inheritance, which allows subclasses to override methods of their superclass.


//Inheritance is a fundamental concept in object-oriented programming that allows one class to inherit properties and methods from another class. The class that is inherited from is called the superclass or parent class, and the class that inherits is called the subclass or child class. Inheritance promotes code reusability and a hierarchical classification of classes.


//Encapsulation is one of the four fundamental principles of object-oriented programming (OOP), alongside inheritance, polymorphism, and abstraction. It refers to the bundling of data (attributes) and methods that operate on that data into a single unit, or class. Encapsulation restricts direct access to an object's data and methods, and instead provides a public interface for interacting with the object. This mechanism hides the internal state of an object and prevents external code from directly modifying the object's data, which helps in maintaining the integrity and security of the data.
