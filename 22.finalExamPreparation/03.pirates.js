function solve(data) {

    let currentLine = data.shift();
    let targetedCities = {};

    while (currentLine !== 'Sail') {

        let [city, population, gold] = currentLine.split('||');

        if (!targetedCities[city]) {
            targetedCities[city] = {
                population: Number(population),
                gold: Number(gold),
            };
        } else {
            targetedCities[city].population += Number(population);
            targetedCities[city].gold += Number(gold);
        }
        currentLine = data.shift();
    }

    currentLine = data.shift();  // updating the current line again , otherwisde we will have the 'Sail' line

    while (currentLine !== 'End') {
        let command = currentLine.split('=>')[0];

        switch (command) {
            case 'Plunder': {
                let [, city, population, gold] = currentLine.split('=>');
                if (targetedCities[city].population - Number(population) == 0 ||
                    targetedCities[city].gold - Number(gold) == 0) {
                    console.log(`${city} plundered! ${Number(gold)} gold stolen, ${Number(population)} citizens killed.`);
                    console.log(`${city} has been wiped off the map!`);
                    delete targetedCities[city];
                } else {
                    targetedCities[city].population -= Number(population);
                    targetedCities[city].gold -= Number(gold);
                    console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                }
                break;
            }
            case 'Prosper': {
                let [, city, goldd] = currentLine.split('=>');
                if (goldd >= 0) {
                    targetedCities[city].gold += Number(goldd);
                    let totalGold = targetedCities[city].gold;
                   
                    console.log(`${goldd} gold added to the city treasury. ${city} now has ${totalGold} gold.`)
                } else {
                    console.log("Gold added cannot be a negative number!")
                }

                break;
            }
        }
        currentLine = data.shift();
    }
    let entries = Object.entries(targetedCities);

    if (entries.length !== 0) {

        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);

        for (const town in targetedCities) {
            console.log(`${town} -> Population: ${targetedCities[town].population} citizens, Gold: ${targetedCities[town].gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }

}
solve([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End",
]);

