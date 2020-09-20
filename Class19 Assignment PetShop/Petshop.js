var PetsAvailability = /** @class */ (function () {
    function PetsAvailability() {
        this.DogCounter = 0;
        this.CatCounter = 0;
        this.ParrotCounter = 0;
    }
    PetsAvailability.prototype.insertPet = function (_kindofPet, _character, _historyOfPet) {
        this.kindofPet = _kindofPet;
        this.character = _character;
        this.historyOfPet = _historyOfPet;
        if (_kindofPet == "Dog") {
            this.DogCounter += 1;
        }
        if (_kindofPet == "Cat") {
            this.CatCounter += 1;
        }
        if (_kindofPet == "Parrot") {
            this.ParrotCounter += 1;
        }
    };
    PetsAvailability.prototype.statusofPet = function (_petsofChoice) {
        for (var i = 0; i < _petsofChoice.length; i++) {
            if (_petsofChoice[i] == this.historyOfPet.familyOfPet) { //Comparing if requested is available;
                console.log("Breed of" + _petsofChoice[i] + " is available as requested");
            }
        }
    };
    PetsAvailability.prototype.counterCheck = function () {
        console.log("Counter of the Animals is as follows" + " Dogs:" + this.DogCounter + " Cats:" + this.CatCounter + " Parrots:" + this.ParrotCounter);
    };
    PetsAvailability.prototype.availabilityCheckofRequests = function (_PetsofChoice) {
        var counter = 0;
        for (var i = 0; i < _PetsofChoice.length; i++) {
            if (_PetsofChoice[i] == this.historyOfPet.familyOfPet) {
                counter += 1;
                this.availabilityCounter = counter;
            }
        }
        console.log("Number of choice requested by the users with the number of choice smatching in the Availability are: " + counter);
    };
    return PetsAvailability;
}());
var PetsRequest = /** @class */ (function () {
    function PetsRequest() {
    }
    PetsRequest.prototype.enquirePet = function (_petsofchoice, _petHabitsdata) {
        this.petHabitsdata = _petHabitsdata;
        this.petsofChoice = _petsofchoice;
        console.log("Choice of Pets Required by Users are:");
        for (var i in _petsofchoice) {
            console.log(_petsofchoice[i]);
        }
        return _petsofchoice;
    };
    return PetsRequest;
}());
var obj = new PetsAvailability();
obj.insertPet("Dog", "trained", { familyOfPet: "Labrador", colorOfPet: "Brown", eatingHabits: "Vegetarian", tagNumber: 2301 });
obj.insertPet("Dog", "Not-trained", { familyOfPet: "Labrador", colorOfPet: "Brown", eatingHabits: "Vegetarian", tagNumber: 2302 });
obj.insertPet("Cat", "tamed", { familyOfPet: "Labrador", colorOfPet: "Brown", eatingHabits: "Vegetarian", tagNumber: 3009 });
obj.insertPet("Parrot", "trained", { familyOfPet: "Labrador", colorOfPet: "Brown", eatingHabits: "Vegetarian", tagNumber: 40041 });
var obj1 = new PetsRequest();
var PetsChoice = obj1.enquirePet(["Labrador", "Chihuahua", "Alsasian", "Hound", "Roosevelt"]);
obj.statusofPet(PetsChoice);
obj.counterCheck();
obj.availabilityCheckofRequests(PetsChoice);
