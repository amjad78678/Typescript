interface User {
  readonly dbId: number;
  name: string;
  email: string;
  userId: number;
  googleId?: number;
  startTrail(): string;
  getCoupon(couponName: string, valueOff: number): number;
}

//Reopening interface
interface User {
  githubToken: string;
}

//Inheritance interface

interface Admin extends User{

    role:'admin'|'po'|'sudo'
}

const amjad: Admin = {
  dbId: 1,
  role:'admin',
  githubToken: "34356577875",
  name: "amjad",
  email: "a@a.com",
  userId: 12345,
  startTrail: () => "Trail is started",
  getCoupon: (couponname: "ramzan", off: 10) => {
    return 10;
  },
};
