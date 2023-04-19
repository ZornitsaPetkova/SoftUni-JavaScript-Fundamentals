function solve(data) {

    let number = Number(data.shift());
    let plants = {};

    for (let i = 0; i < number; i++) {

        let plant = data.shift();
        let [plantName, rarity] = plant.split('<->');

        plants[plantName] = {
            rarity: Number(rarity),
            ratings: [],
        };
    }
    // let command = data.shift(); еквивалент на долните 2 реда.
    // let commands = data.slice();
    // let currentLine = commands.shift();

    let command = data.shift();
    while (command != 'Exhibition') {
        let [commandName, args] = command.split(': ');
        let [plantName, argument] = args.split(' - ');

        if (plants[plantName]) {
            switch (commandName) {
                case 'Rate':
                    let rating = Number(argument);
                    plants[plantName].ratings.push(rating);
                    break;

                case 'Update':
                    let newRarity = Number(argument);
                    plants[plantName].rarity = newRarity;
                    break;

                case 'Reset':
                    plants[plantName].rarity = [];
                    break;
            }
        } else {
            console.log("error");
        }

        command = data.shift();
    }
    console.log(`Plants for the exhibition:`);

    let entries = Object.entries(plants);

    // loop thgrough entries and destructure parameters in the loop variable

    for (const [plantName, { rarity, rating }] of entries) {
        console.log(`- ${plantName}; Rarity: ${rarity}; Rating: ${average(rating).toFixed(2)}`);
    }

    // function to calc the average
    function average(arr) {
        if (arr.length === 0) {
            return 0;
        }
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

}
solve([
    "3",

    "Arnoldii<->4",

    "Woodii<->7",

    "Welwitschia<->2",

    "Rate: Woodii - 10",

    "Rate: Welwitschia - 7",

    "Rate: Arnoldii - 3",

    "Rate: Woodii - 5",

    "Update: Woodii - 5",

    "Reset: Arnoldii",

    "Exhibition",
]);