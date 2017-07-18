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


class Facotory {
  constructor({make = 'Mazda', location = 'USA', airbags = true, abs = true}) {

    this.massBuild = massBuild;
    this.customerBuild = customerBuild;
    this.airbags = airbags;
    this.abs = abs;
    this.make = make;
    this.location = location;
    this.warranty = "50,000 miles/ 3 years";

  }


  massBuild(quanity, options) {
      const color = options.color;
      const trim = options.trim;
      const model = options.model;

      console.log(`Building ${quantity} ${color} ${trim} ${model}'s`);
      console.log('Building QUANTITY COLOR TRIM MODEL's' i.e: 'Building 100 blue Touring CX-5's');
    }
}

let customerBuild = new Factory('mazda','location','color', 'options');


console.log("Building one COLOR TRIM MODEL with the following options: OPTIONS", i.e: "Building one red Sport Mazda3 with the following options: heated seats, rear spoiler");

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
    this.door = door;
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
    this.warranty = 100,000 miles/ 5 miles
  }

static.massBuild(quantity, options) {
console.log('building ${qty} ${options.color} ${options.trim}')
${options.model}'s');

  }
}}


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
    this. = wheelstrim;
    this.audio = audio;
    this.seatstrim = seatstrim;
    this.moonroof: false,
    this.enginetype: gasoline,
    this.convertible: true,
    this.doors: 2



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
    this.backupcamera: true,
    this.audio: true,
    this.warrantyProperty = 150,000 miles/ 6 years

  }
}



var warrantyProperty = Object.create(150,000 miles/ 6 years);

// LET'S BUILD SOME CARS AND TRUCKS!



// MAZDA3 MASS PRODUCTION
// Create an instance  Car.
// The following properties must be specified: model (mazda3), color (red), enginetype (hybrid), transmission (automatic), trim (touring), wheels (base), audio (premium), seats (leather), and moonroof (true)

// Write your 'mazda3' instance below:

let mazda3 = new Car( model 'mazda3', color 'red', enginetype 'hybrid', transmission 'automatic', trim 'touring', wheels 'base', audio 'premium', seats 'leather', moonroof = true);



// Print mazda3. I should have all the above properties.
// Write your code below:




console.log(mazda3.model 'mazda3', color 'red', enginetype 'hybrid', transmission 'automatic', trim 'touring', wheels 'base', audio 'premium', seats 'leather', moonroof = true));

// Print calling massBuild(), building 35000 cars.
// It should print: "Building 35000 Red Touring Mazda3's."
// Write your code below:

console.log(massBuild.'Building 35000 Red Touring Mazda3's);



// Print, calling customerBuild(), building one yellow mazda3 with the following options, as an array: weather package, satellite radio, rear spoiler.
// It should read: "Building one yellow Touring Mazda3 with the following options: weather package, satellite radio, rear spoiler"
// Write your code below:

customerBuild(color, options) {
console.log(customerBuild.'Building one yellow Touring Mazda3 with the following options: weather package, satellite radio, rear spoiler');
}

// MIATA-RF MASS PRODUCTION
// Create an instance  Sport.
// The following properties must be specified: model (Miata-RF), trim (Grand Touring), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium).

// Write your 'miataRf' instance below:
// Write your code below:


let Sport = new Car(model (Miata-RF), trim (Grand Touring), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium));

// Print miataRf. It should have all of the above properties. Plus, the extended warranty.
// Write your code below:

let MiataRF = new Car(model (Miata-RF), trim (Grand Touring), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium))
console.log(miataRF,model (Miata-RF), trim (Grand Touring), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium), extended warranty)




// Print miataRf, calling massBuild(), building 15,000
// It should print: "Building 15000 Red Grand Touring Miata-RF's."
// Write your code below:

console.log(massBuild.miataRf, 'Building 15000 Red Grand Touring Miata-Rf')



// Print miataRf, calling customerBuild(), building one black Miata-Rf with the following options, as an array: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control.
// It should read: "Building one black Grand Touring Miata-RF with the following options: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control"
// Write your code below:


console.log(customerBuild.miataRf, 'Building one black Grand Touring Miata-RF with the following options: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control' )

// TRAIL BLAZER MASS PRODUCTION
// The Trail Blazer should inherit from truck.
// The following properties must be specified: model (Trail Blazer), color (blue), trim (Sport), enginesize (8), hitch (true), bed (standard), navigation (true), doors (2)

// Write your 'trailBlazer' instance below:
// Write your code below:

let TrailBlazer = new Truck(model 'Trail Blazer', color 'blue', trim 'Sport', enginesize = 8, hitch = true, bed 'standard', navigation = true), doors = 2);



// Print trailBlazer. It should have all the above properties. Plus, the extended warranty.
// Write your code below:

let TrailBlazer = new Truck(model 'Trail Blazer', color 'blue', trim 'Sport', enginesize = 8, hitch = true, bed 'standard', navigation = true), doors = 2);
console.log(trailBlazer.model,'Trail Blazer', color 'blue', trim 'Sport', enginesize = 8, hitch = true, bed 'standard', navigation = true), doors = 2, 'extended' warranty);


// Print trailBlazer, calling massBuid(). It should build 35000 trucks.
// It should print: "Building 35000 blue Sport Trail Blazer's."
// Wrint your code below:

console.log(massBuild.trailBlazer,'Building 35000 blue Sport Trail Blazer's.);



// Print trailBlazer, calling customerBuild(). It should build a red Trail Blazer with the following options, as an array: seat warmers, tinted windows, fog lamps.
// It should print: "Building one red Sport Trail Blazer with the following options: seat warmers, tinted windows, fog lamps"
// Write your code below:


console.log(customerBuild.trailBlazer, 'Building one red Sport Trail Blazer with the following options: seat warmers, tinted windows, fog lamps');
