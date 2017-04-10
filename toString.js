function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}

var toy = new Robot("Toy", 2013, "Avary");
console.log(toy.toString());

Robot.prototype.toString = function() {
	return this.name + " Robot belonging to " + this.owner;
};
var toy = new Robot("Toy", 2013, "Avary");
console.log(toy.toString());

console.log("Robot is: " + toy); //The toy object will get converted to a string using toString before it's concatenated. If toy has overridden toString, it will use that method.

