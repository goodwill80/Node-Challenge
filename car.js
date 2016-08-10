var Car = function(color, convertible, speed) {
  this.color = color;
  this.convertible = convertible;
  this.speed = speed;
  this.accelerate = function(speedIncrease){
      return "Previous speed is " + this.speed + "Current speed is " + (this.speed += speedIncrease);
  };

  this.decelerate = function(speedDecrease){
      return "Previous speed is " + this.speed + "Current speed is " + (this.speed -= speedDecrease);
  };
};

module.exports = Car;
