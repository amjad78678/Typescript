function greet(name: string, ...titles: string[]): string {
    return `${name} is a ${titles.join(" and ")}`;
}

console.log(greet("John Doe", "developer", "designer")); // Output: John Doe is a developer and designer



//if we need to pass string and number also we can use

function sum(...values: (number | string)[]): void {

     console.log('iam values',values)
        
}

console.log(sum(1, '2', 3, '4', 5)); // Output: 15





//Rest parameters in TypeScript provide a flexible way to work with functions that can accept any number of arguments. They are defined using the ... syntax and are collected into an array, allowing you to iterate over them or pass them to other functions. This feature is particularly useful for creating more dynamic and flexible functions.

export {}