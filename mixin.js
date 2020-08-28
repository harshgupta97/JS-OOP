// rest operator in ES6 (...)
function mixin(target, ...sources) {
    // spread operator syntax is same, but this time we call it spread operator
    Object.assign(target, ...sources);
}


const canEat = {
    eat: function () {
        this.hunger--;
        console.log('Eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('Walking');
    }
};

const canSwim = {
    swim: function () {
        console.log('Swimming');
    }
}

function Person() {

}

mixin(Person.prototype, canEat, canWalk);

function Fish() {
}

mixin(Fish.prototype, canSwim, canEat);

const fish = new Fish();
const person = new Person();
