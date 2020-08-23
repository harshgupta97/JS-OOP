// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log('Draw');
//     }
// }

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('Create circle function.');
        }
    }
}

const circle = createCircle(1);

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    this.draw = function () {
        console.log('Draw');
    };
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

const another = new Circle(1);

const Circle1 = new Function('radius', `
this.radius = radius;
    this.draw = function () {
        console.log('Draw');
    }
`);

const circle1 = new Circle1(1);


for (let key in another) {
    if (typeof circle[key] === 'function')
        console.log(key, circle[key])
}

const keys = Object.keys(another);
console.log(keys);

if ('radius' in another)
    console.log('Circle has radius');

x = { value: 20 };
y = x;

x.value = 10;

let number = { value: 10 };

function increase(number) {
    number.value++;
}

increase(number);
console.log(number);