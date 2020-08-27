function Circle(radius) {
    // Instance member
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

// Prototype member
Circle.prototype.draw = function () {
    console.log('Draw');
}

Circle.prototype.toString = function () {
    return 'Circle has radius ' + this.radius;
}

const circle = new Circle(1);
const c1 = new Circle(1);
const c2 = new Circle(2);

// Object.keys will only return instance memnber
console.log(Object.keys(circle));

// for in loop returns all members (instance + prototype)
for (let key in circle)
    console.log(key);

// Don't modify the objects you don't own
/*
Array.prototype.shuffle = function () {
    //...
}

cosnt array = [];
array.shuffle();
*/

for (let key in circle) {
    if (typeof circle[key] === 'function')
        console.log(key, circle[key])
}

const person = { name: "Harsh" };
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
})

person.name = "Jhon";
console.log(person);

for (let key in person)
    console.log(key);

console.log(Object.keys(person));
const object = Object.getPrototypeOf(person);

console.log(Object.getOwnPropertyDescriptor(object, 'toString'));