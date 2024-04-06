function addTwo(num: number) {
  // num.toUpperCase()
  return num + 2;
}

addTwo(5);

//string

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("amjad");

//signup a user

function signUp(email: string, password: string, isAdmin: boolean) {}
function loginUser(email: string, password: string, isPaid: boolean = false) {}

signUp("amjadali", "amjad@gmail.com", true);
loginUser("amjadali", "amjad@gmail.com");

//returning from function

function addThree(num: number): number{
  return num + 2;
//   return "amjad";
}

addThree(5);



//Return more than one type

// function getValue(val: number):boolean{


//     if(val>5){
//         return true
//     }

//     return "200 OK"


// }


//In arrow function how we do

const getHello=(str:string): string=>{

    return ""


}



const heros=["captain america","thor","hulk","iron man"]
// const heros=[1,2,4]

const heroStrings =heros.map((hero,index): string=>{

    return `${index} hero is ${hero}`
})


console.log(heroStrings)



function consoleError(errMsg: string): void{

    console.log(errMsg)

}
function handleError(errMsg: string): never{

   throw new Error(errMsg)
// console.log(errMsg)

}



export {};
