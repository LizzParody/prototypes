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
    this.sitting = true;  //this overrides the prototype sitting, this is added to the object instance.
    console.log(this.name + " is now sitting");
  }
};

var spot = new Dog("Spot", "Chihuahua", 10);
var barnaby = new Dog("Barnaby", "Basset Hound", 55);

barnaby.sit();
barnaby.sit();
spot.sit();
spot.sit();
