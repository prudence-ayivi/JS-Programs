// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (var dairies of dairy) {
    console.log(dairies)
    }
}
logDairy();

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (let attributes of Object.keys(bird)) {
        console.log(attributes + ': ' + bird[attributes]);
    }
}
birdCan();

// Task 3
function animalCan() {
    for (prop in bird) {
        console.log(prop + ': ' + bird[prop]);
    }
}
animalCan();