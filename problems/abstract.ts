// interface IAnimal {
//   makeSound(): void;
//   move(): void;
// }

// abstract class Animal implements IAnimal {
//   abstract makeSound(): void;

//   move(): void {
//     console.log("its moving little bit");
//   }

// }

// class Dog extends Animal {
//   makeSound(): void {
//     console.log("Wooof !");
//   }
// }

// const myDog = new Dog();

// myDog.move();
// myDog.makeSound()

// export {};

interface IAnimal {
  name: string;
  makeSound(): void;
}

abstract class Animal implements IAnimal {
  constructor(public name: string) {}

  abstract makeSound(): void;
}

 class Bird extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log('Pooooooi')
  }
}


const Crow=new Bird('Crow')

Crow.makeSound()