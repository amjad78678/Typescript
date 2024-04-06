interface IProduct {
  name: string;
  price: number;
}

class Product implements IProduct {
  constructor(private _name: string, private _price: number) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name=value
  }

  get price(): number {
    return this._price;
  }

  set price(value: number){

    this._price=value
  }


}

const apple=new Product('apple',50)

apple.name='applemon'
console.log(apple.name)
