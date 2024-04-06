export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserAccount {
  constructor(public user: User) {}

  displayUserInfo() {
    console.log(
      `This is details ${this.user.id} my name is ${this.user.name} also email is ${this.user.email}`
    );
  }
}
