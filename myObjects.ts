// function createUser({ name: string, isPaid: boolean }) {}

// // createUser({ name: "amjadali", isPaid: 34 ,email:'a@a.com'});
// let newUser = { name: "amjadali", isPaid: 34, email: "a@a.com" };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 599 };
// }


//type aliases

// type User = {

//     name:string;
//     email:string;
//     isActive:boolean

// }

// function createUser(user:User):User{

//     return { name: 'amjad', email: 'amjad@gmail.com',isActive:true } 
// }


//check default behaviour

type User ={

    readonly _id:string
    email: string
    name: string
    isActive: boolean
}

let myUser: User={
    _id:'1234amjad',
    email:'amjadli@gmail.com',
    name:'amjad',
    isActive:false
}

myUser.name='ammu'
// myUser._id='newidcantbecausereadonly'


//Joining two types or more
type cardNumber={

    cardnumber:string
}

type cardDate={
    cardDate:string
}


type cardDetails=cardNumber&cardDate&{
    cvv:number
}







export {};
