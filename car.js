var Car = function(color, convertible, speed) {
  this.color = color;
  this.convertible = convertible;
  this.speed = speed;
  this.accelerate = function(speedIncrease){
      console.log("Previous speed is " + this.speed);
      return this.speed += speedIncrease;
  };

  this.decelerate = function(speedDecrease){
      console.log("Previous speed is " + this.speed);
      return this.speed -= speedDecrease;
  };
};

module.exports = Car;
