var Circle = /** @class */ (function () {
    // private _radius: number;
    // constructor(radius: number) {
    //     this._radius = radius;
    // }
    function Circle(_radius) {
        this._radius = _radius;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        // Getter for radius
        get: function () {
            return this._radius;
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
var circle = new Circle(5);
console.log(circle.radius); // Output: 5
