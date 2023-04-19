function solve(data) {

    let numCars = Number(data.shift());
    let cars = {};

    for (let i = 0; i < numCars; i++) {

        let [brand, km, fuel] = data.shift().split('|');

        cars[brand] = {
            km: Number(km),
            fuel: Number(fuel)
        };

    }

    let [command, brand, arg1, arg2] = data.shift().split(" : ");

    while (command !== 'Stop') {
        switch (command) {

            case 'Drive': {
                if (cars[brand].fuel >= Number(arg2)) {
                    cars[brand].km += Number(arg1);
                    cars[brand].fuel -= Number(arg2);

                    console.log(`${brand} driven for ${arg1} kilometers. ${arg2} liters of fuel consumed.`);
                    if (cars[brand].km > 100000) {
                        console.log(`Time to sell the ${brand}!`)
                        delete cars[brand];
                        break;
                    }
                } else {
                    console.log("Not enough fuel to make that ride");
                }
                break;
            }
            case 'Refuel': {
                if (cars[brand].fuel + Number(arg1) > 75) {
                    console.log(`${brand} refueled with ${75 - cars[brand].fuel} liters`);
                    cars[brand].fuel = 75;
                } else {
                    console.log(`${brand} refueled with ${arg1} liters`);
                    cars[brand].fuel += Number(arg1);
                }
                break;
            }
            case 'Revert': {
                cars[brand].km -= Number(arg1);
                if (cars[brand].km < 10000) {
                    cars[brand].km = 10000;
                } else {
                    console.log(`${brand} mileage decreased by ${arg1} kilometers`);
                }
                break;
            }
                
        }
        [command, brand, arg1, arg2] = data.shift().split(" : ");
    }
    
    for (const key in cars) {
        let mileage = cars[key].km;
        let fuel = cars[key].fuel;
        console.log(`${key} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }


}
solve([
    "3",
    "Audi A6|38000|62",
    "Mercedes CLS|11000|35",
    "Volkswagen Passat CC|45678|5",
    "Drive : Audi A6 : 543 : 47",
    "Drive : Mercedes CLS : 94 : 11",
    "Drive : Volkswagen Passat CC : 69 : 8",
    "Refuel : Audi A6 : 50",
    "Revert : Mercedes CLS : 500",
    "Revert : Audi A6 : 30000",
    "Stop",
]);