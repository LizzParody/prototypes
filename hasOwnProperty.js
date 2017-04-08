function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
	if (this.sitting) {
		console.log(this.name + " is already sitting");
	} else {
		this.sitting = true;
		console.log(this.name + " is now sitting");
	}
};

var fido = new Dog("Fido", "Mixed", 38);
var spot = new Dog("Spot", "Chihuahua", 10);

console.log("Does spot have a sitting property? " + spot.hasOwnProperty("sitting")); //returns false
console.log("Does fido have a sitting property? " + fido.hasOwnProperty("sitting")); //returns false
fido.sit();
console.log("Does fido have a sitting property? " + fido.hasOwnProperty("sitting")); //returns true
console.log("Does fido have a name property? " + fido.hasOwnProperty("name")); //returns true
