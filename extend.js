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

function Square(size) {
    this.size = size;
}

// Intermediate function inheritance
extend(Square, Shape);

const square = new Square(1);