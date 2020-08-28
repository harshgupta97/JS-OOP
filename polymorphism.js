function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

// Intermediate function inheritance
extend(Circle, Shape);

// Method overriding
// duplicate method already exist in parent object (Shape) but we are implementing it in child object also (Circle)
Circle.prototype.duplicate = function () {
    console.log('Duplicate circle');
}

function Square() { }

extend(Square, Shape);


// Method overriding
// duplicate method already exist in parent object (Shape) but we are implementing it in child object also (Circle)
Square.prototype.duplicate = function () {
    console.log('Duplicate square');
}

const circle = new Circle(1);
const shapes = [
    new Circle(1),
    new Square()
];

for (let shape of shapes)
    shape.duplicate();