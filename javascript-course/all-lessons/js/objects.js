console.clear();



let playGame = confirm("This is a prompt")


// Objects
const vehicle = {
    wheels: 4,
    engine: function(){
        return "Vrroooom";
    }
}
const truck = Object.create(vehicle)
truck.wheels = 2;
console.log(truck)
console.log(truck.wheels)
console.log(truck.engine())

// creating instance of vehicle
const car = Object.create(vehicle)
car.doors = 4;
// redefining function for car 
car.engine = function() {return "stutututututututut"}
console.log(car.engine())

// creating instance of car
const ev = Object.create(car);
ev.engine = function(){return "wrrrrrrrrrrr"}
console.log(ev.engine())

// destructuring objects
const {wheels: optionalNewName, doors: anotherOptionalNewName} = car;
console.log(optionalNewName);

function closes({ doors }) { return `all ${doors} doors close`}
console.log(closes(car))

