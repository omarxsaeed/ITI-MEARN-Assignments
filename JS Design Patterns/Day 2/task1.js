class Vehicle {
    constructor(mileage, price) {
        this.mileage = mileage;
        this.price = price;
    }

    displayVehicleInfo() {
        console.log(this);
    }
}

class Car extends Vehicle {
    constructor(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType) {
        super(mileage, price);
        this.ownershipCost = ownershipCost;
        this.warranty = warranty;
        this.seatingCapacity = seatingCapacity;
        this.fuelType = fuelType;
    }
}

class Audi extends Car {
    constructor(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType, modelType) {
        super(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType);
        this.modelType = modelType;
    }
}

class Ford extends Car {
    constructor(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType, modelType) {
        super(mileage, price, ownershipCost, warranty, seatingCapacity, fuelType);

        this.modelType = modelType;
    }
}

class Bike extends Vehicle {
    constructor(mileage, price, noCylinders, noGears, coolingType, wheelType, fuelTankSize) {
        super(mileage, price);
        this.noCylinders = noCylinders;
        this.noGears = noGears;
        this.coolingType = coolingType;
        this.wheelType = wheelType;
        this.fuelTankSize = fuelTankSize;
    }
}

class Bajaj extends Bike {
    constructor(mileage, price, noCylinders, noGears, coolingType, wheelType, fuelTankSize, makeType) {
        super(mileage, price, noCylinders, noGears, coolingType, wheelType, fuelTankSize, makeType);
        this.makeType = makeType;
    }
}

class TVS extends Bike {
    constructor(mileage, price, noCylinders, noGears, coolingType, wheelType, fuelTankSize, makeType) {
        super(mileage, price, noCylinders, noGears, coolingType, wheelType, fuelTankSize, makeType);
        this.makeType = makeType;
    }
}

let maverick = new Ford(154000, 11000, 5000, 3, 5, "Petrol", "Maverick");
maverick.displayVehicleInfo();

let r8 = new Audi(1000, 15000, 20000, 5, 2, "Petrol", "R8 Coupe");
r8.displayVehicleInfo();

let p150 = new Bajaj(0, 500, 4, 2, "air", "spokes", 10, "Pulsar 150");
p150.displayVehicleInfo();

let jupiter = new TVS(1000, 400, 2, 2, "air", "alloys", 8, "Jupiter");
jupiter.displayVehicleInfo();
