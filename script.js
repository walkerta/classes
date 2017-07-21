// CLASSES PROJECT
// In this project, you will build a Mazda car factory that manufactures both cars and trucks.
// Read each set of instructions carefully!

// BUILD YOUR FACTORY!

// DECLARE A FACTORY CLASS
// All automobiles manufacutered should have the following properties: make (Mazda), location (USA), airbags (true), abs (true), warranty (60,000 miles / 3 years)
// This factory should also run two functions: massBuild() and customerBuild()

// massBuild should receive the following parameters: quantity, options.
// It should print "Building QUANTITY COLOR TRIM MODEL's" i.e: "Building 100 blue Touring CX-5's"

// customerBuild should receive the following parameters: color, options.
// It should print "Building one COLOR TRIM MODEL with the following options: OPTIONS", i.e: "Building one red Sport Mazda3 with the following options: heated seats, rear spoiler"

// Create the Factory class bellow:


class Factory {
  constructor() {

    this.airbags = true;
    this.abs = true;
    this.make = 'Mazda';
    this.location = 'USA';
    this.warranty = "50,000 miles/ 3 years";

  }
}

// CREATE A SUB-CLASS CALLED CAR
// It should extend from Factory.
// The constructor should have the following properties: model, doors, color, enginetype, transmission, trim, wheelstrim, audio, seatstrim, moonroof. The values should be specified when creating an instance of Car.
// It should specifically inherit the warranty property from Factory so we can modify it.
// Car should also have the following additional properties: enginesize (4), navigation (true), backupcamera (true), warranty (100,000 miles / 5 years)
// Write your code below:

class Car extends Factory {
  constructor({model, doors, color, enginetype, transmission, trim, wheelstrim, audio, seatstrim, moonroof}) {
    super();
    this.model = model;
    this.door = doors;
    this.enginetype = enginetype;
    this.transmission = transmission;
    this.trim = trim;
    this.wheelstrim = wheelstrim;
    this.audio = audio;
    this.seatstrim = seatstrim;
    this.moonroof = moonroof;
    this.enginesize = 4;
    this.navigation = true;
    this.backupcamera = true;
    this.warranty = "100,000 miles/ 5 miles";
  }

  static massBuild(qty, options) {
    console.log(`building ${qty} ${options.color} ${options.trim} ${options.model}s`);
  }

  static customerBuild(color, options) {
      console.log(`Building one ${color} ${this.trim} ${this.model} with the following options: ${options.toString()}`);
  }


}


var warrantyProperty = Object.create(Factory);

// CREATE A SUB-CLASS CALLED SPORT
// It should extend from Car.
// The constructor should have the following properties: model, trim, transmission, top, color, seatstrim, audio, wheelstrim. The values should be specified when creating an instance of Sport.
// Sports cars should also have the following additional properties: moonroof (false), enginetype (gasoline), convertible (true), doors (2)
// Write your code below:

class Sport extends Car {
  constructor( {model, trim, transmission, top, color, seatstrim, audio, wheelstrim}) {
    super(model, trim, transmission, color, seatstrim, audio, wheelstrim);
    this.model = model;
    this.trim = trim;
    this.transmission = transmission;
    this.top = top;
    this.color= color;
    this.wheelstrim = wheelstrim;
    this.audio = audio;
    this.seatstrim = seatstrim;
    this.moonroof = false;
    this.enginetype = gasoline;
    this.convertible = true;
    this.doors = 2;



  }
}



// CREATE A SUB-CLASS CALLED TRUCK
// Yes...this Mazda factory makes trucks....
// It should extend from 'Factory'.
// The constructor should have the following properties: model, color, enginesize, hitch, bed, navigation. The values should be specified when creating an instance of Truck.
// Truck should also have the following properties, standard: backupcamera (true), audio (basic)
// It should also inherit the warranty property so we can extend it to: 150,000 miles / 6 years.
// Write your code below:

class Truck extends Factory {
  constructor({model, doors, color, enginetype, hitch, bed, navigation}) {
    super();
    this.model = model;
    this.door = door;
    this.color = color;
    this.enginetype = enginetype;
    this.hitch = hitch;
    this.bed = bed;
    this.navigation = navigation;
    this.backupcamera = true;
    this.audio = true;
    this.warrantyProperty = '150,000 miles/ 6 years';

  }
}


// LET'S BUILD SOME CARS AND TRUCKS!



// MAZDA3 MASS PRODUCTION
// Create an instance  Car.
// The following properties must be specified: model (mazda3), color (red), enginetype (hybrid), transmission (automatic), trim (touring), wheels (base), audio (premium), seats (leather), and moonroof (true)

// Write your 'mazda3' instance below:

let mazda3 = new Car({ model: 'mazda3', color: 'red', enginetype: 'hybrid', transmission: 'automatic', trim: 'touring', wheels: 'base', audio: 'premium', seats: 'leather', moonroof: true});



// Print mazda3. I should have all the above properties.
// Write your code below:




console.log(mazda3);

// Print calling massBuild(), building 35000 cars.
// It should print: "Building 35000 Red Touring Mazda3's."
// Write your code below:

Car.massBuild(3500,{
  color: 'Red',
  trim: 'Touring',
  model: 'Mazda3'
});



// Print, calling customerBuild(), building one yellow mazda3 with the following options, as an array: weather package, satellite radio, rear spoiler.
// It should read: "Building one yellow Touring Mazda3 with the following options: weather package, satellite radio, rear spoiler"
// Write your code below:

Car.customerBuild('yellow',['weather package', 'satellite radio', 'rear spoiler'])
// MIATA-RF MASS PRODUCTION
// Create an instance  Sport.
// The following properties must be specified: model (Miata-RF), trim (Grand Touring), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium).

// Write your 'miataRf' instance below:
// Write your code below:
