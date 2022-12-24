class Computer {
    constructor(processorCores, ram, hasKeyboard = true) {
        this.processorCores = processorCores;
        this.ram = ram;
        this.hasKeyboard = hasKeyboard;
    }

    addMoreRam(additionalRam) {
        this.ram += additionalRam;
        console.log(`Upgraded the pc to have ${this.ram}GB ram`);
    }

    displaySpecs() {
        console.log(`This device has ${this.processorCores} cores processor and ${this.ram}GB ram`);
    }
}

class Laptop extends Computer {
    constructor(processorCores, ram, hasKeyboard = true, weight) {
        super(processorCores, ram, hasKeyboard);
        this.weight = weight;
    }

    displaySpecs() {
        console.log(
            `This device has ${this.processorCores} cores processor and ${this.ram}GB ram and weighs ${this.weight} kgs.`
        );
    }

    isHeavy() {
        if (this.weight > 2.5) {
            console.log("This laptop is a heavy one.");
        } else {
            console.log("This a nice lightweight laptop.");
        }
    }
}

class SmartPhone extends Computer {
    constructor(processorCores, ram, hasKeyboard = false, camera) {
        super(processorCores, ram, hasKeyboard);
        this.camera = camera;
    }

    displaySpecs() {
        console.log(
            `This device has ${this.processorCores} cores processor and ${this.ram}GB ram and with a camera system of ${this.camera}.`
        );
    }

    takePicture() {
        console.log("Photo Taken");
    }
}

let myPC = new Computer(8, 8, true);

myPC.displaySpecs();
myPC.addMoreRam(8);
myPC.displaySpecs();

let myLaptop = new Laptop(4, 8, true, 2.6);

myLaptop.displaySpecs();
myLaptop.addMoreRam(4);
myLaptop.displaySpecs();
myLaptop.isHeavy();

myPhone = new SmartPhone(1, 2, false, " ƒ/2.8 aperture");
myPhone.displaySpecs();
myPhone.takePicture();
