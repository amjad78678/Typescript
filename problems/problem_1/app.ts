import { User,UserAccount } from "./modules/user";


const user: User={
  
    id:1,
    name:'amjadali',
    email:'amjadali@a.com'

}

const user1=new UserAccount(user)

user1.displayUserInfo()