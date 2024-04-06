// interface IAnimal {

//     name: string;
//     makeSound(): void;
// }


// class Animal implements IAnimal {


//     constructor(
//         private _name: string 
//     ){}

//     makeSound(): void {
//         console.log('Woof ')
//     }

//     get name(): string{

//         console.log('iam getting called')
    
//         return this._name
//     }

//     set name(value: string){
//         this._name=value
//     }
// }


// const bird=new Animal('crow')

// bird.makeSound
// console.log(bird.name)

// interface IAnimal {
//     name: string;
//     makeSound(): void;
// }

// class Animal implements IAnimal{


//     constructor(
//         public name: string
//     ){}

//     makeSound(): void {
        
//         console.log(`${this.name} making some sound`)
//     }

// }

// class Bird extends Animal {

//     constructor(name: string){
     
//         super(name)
//     }


// }

// const crow =new Bird('crow')

// crow.makeSound()

type TAnimal= {
    name: string;
    makeSound(): void;
}

abstract class Animal implements TAnimal {

    constructor(
        public name: string
    ){}
     abstract makeSound(): void;

}

class Bird extends Animal {

    constructor(name: string){
      super(name)
    }


    makeSound(): void {
        console.log(`${this.name} making some sound`)
    }
}


const crow = new Bird('crow')

crow.makeSound()


export {}