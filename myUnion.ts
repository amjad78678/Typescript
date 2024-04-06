let score: number | string | boolean = 33;

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let amjadali: User | Admin = { name: "amjad", id: 443 };

amjadali = { username: "amjadali", id: 443 };

// function getDbId(id: number | string) {

//   //making some api calls
//   console.log(`the database id is ${id}`);

// }

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
}

const data: number[] = [1, 2, 3, 5];
const data2: string[] = ["23", "45", "56"];
//   const data3: string[] | number[]=[1,'23',45] //not support either number arr or string arr
const data3: (string | number)[] = [1, "23", 45];

//constant things

let pi: 3.14 = 3.14;

// pi=543 //cant do this

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "middle";
// seatAllotment="crews"  //this not support at these types\

let User: [string, number, boolean];

//tuples order of this is important
User = ["maja", 34, true];

let rgb: [number, number, number];

rgb = [344, 344, 3434];

type User1 = [number, string];

const newUser: User1 = [232, "amjad"];

// newUser[0]='autokaran'  //we cant assign
newUser.push(true);

export {};
