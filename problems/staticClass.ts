//Yes, it is possible to create static classes in TypeScript, although the concept of "static classes" as a distinct entity does not exist in the same way it does in languages like C#. In TypeScript, a class can have static members, which means these members belong to the class itself rather than an instance of the class. You can use static members to create utility functions or constants that are associated with the class but do not require an instance of the class to be used.


class MathUtils {
    static PI: number = 3.14159;

    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}

// Using static members
console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.subtract(5, 3)); // Output: 2
