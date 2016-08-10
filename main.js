var car = require('./car');

var car2 = new car("red", true, 0);

console.log("Car color is " + car2.color);

console.log("Car convertible is " + car2.convertible);

console.log("New speed with acceleration is " + car2.accelerate(5));

console.log("New speed with deceleration is " + car2.decelerate(10));
