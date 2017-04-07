function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

Robot.prototype.maker = "objectsRUs";

Robot.prototype.speak = function() {
  alert("Waring Warning");
}

Robot.prototype.makeCoffee = function() {
  alert("Making coffee");
}

Robot.prototype.blinkLights = function() {
  alert("Blink blink!");
}

var robby = new Robot("Robbie", "1956", "Dr. Morbius");
var rosie = new Robot("Rossie", "1962", "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function() {
	alert("Fetching a coffee from Starbucks.");
};

rosie.cleanHouse = function() {
	alert("Cleaning! Spic and Span soon...");
};

console.log(robby.name + " was made by " + robby.maker +
            " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker +
            " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();

