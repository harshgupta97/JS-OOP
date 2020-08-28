function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {
    // Instance member
    // Calling super constructor
    Shape.call(this, color)
    this.radius = radius;
    this.move = function () {
        this.draw();
        console.log('move');
    }
    let defaultLocation = { x: 0, y: 0 };
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid Location.');

            defaultLocation = value;
        }
    });
}

// Circle.prototype = Object.create(Object.prototype);  Implicit

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle();

Circle.prototype = Object.create(Shape.prototype);

// Whenever you reset the protype of an object, you should also reset the constructor.
// Resetting the constructor
Circle.prototype.constructor = Circle;

// Prototype member
Circle.prototype.draw = function () {
    console.log('Draw');
}

Circle.prototype.toString = function () {
    return 'Circle has radius ' + this.radius;
}

const circle = new Circle(1, 'red');
const shape = new Shape();