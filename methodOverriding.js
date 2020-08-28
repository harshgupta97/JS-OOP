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
    // Wanna call duplicate method from parent
    Shape.prototype.duplicate.call(this);

    console.log('Duplicate circle');
}

const circle = new Circle(1);