


class Circle {
    // private _radius: number;

    // constructor(radius: number) {
    //     this._radius = radius;
    // }

    constructor(
        private _radius: number
    ) {}

    // Getter for radius
    get radius(): number {
        return this._radius;
    }

    // Setter for radius
    set radius(value: number) {
        if (value < 0) {
            throw new Error("Radius cannot be negative");
        }
        this._radius = value;
    }
}

const circle = new Circle(5);
circle.radius = 10; // This calls the setter
console.log(circle.radius); // Output: 10



//Getters and setters in TypeScript provide a way to define custom behavior for accessing and modifying the properties of an object. They allow you to encapsulate the internal representation of an object's data and control how its properties are accessed and modified. This can lead to more robust and maintainable code by enforcing invariants and encapsulating the internal state of an object.