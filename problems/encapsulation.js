var Product = /** @class */ (function () {
    function Product(_name, _price) {
        this._name = _name;
        this._price = _price;
    }
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var apple = new Product('apple', 50);
apple.name = 'applemon';
console.log(apple.name);
