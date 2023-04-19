function solve(data) {

    let numberOfPieces = Number(data.shift());
    let collection = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let currentLine = data.shift();
        let [piece, composer, key] = currentLine.split('|');

        collection[piece] = {
            composer,
            key,
          };
    }

    data = data.splice(numberOfPieces - numberOfPieces);
    data.forEach(element => {

        let line = element.split('|');
        let command = line[0];


        while (command !== 'Stop') {

            if (command === 'Add') {
                let piece = line[1];
                let composer = line[2];
                let key = line[3];

                if (!collection[piece]) {

                    collection[piece] = {
                        composer,
                        key,
                    }

                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);

                } else {
                    console.log(`${piece} is already in the collection!`);

                }

            } else if (command === 'Remove') {
                let pieceToremove = line[1];

                if (collection[pieceToremove]) {
                    delete collection[pieceToremove];
                    console.log(`Successfully removed ${pieceToremove}!`);

                } else {
                    console.log(`Invalid operation! ${pieceToremove} does not exist in the collection.`);
                }

            } else if (command === 'ChangeKey') {
                let pieceKeytoChange = line[1];
                let key = line[2];

                if (!collection[pieceKeytoChange]) {
                    console.log(`Invalid operation! ${pieceKeytoChange} does not exist in the collection.`);
                } else {
                    collection[pieceKeytoChange].key = [key];
                    console.log(`Changed the key of ${pieceKeytoChange} to ${key}!`);
                }
            }
            return;

        }

    });
    let entries = Object.entries(collection);
    // using destructuring
    for (const [piece, { composer, key }] of entries) {
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);

    }
}
solve([
    "3",
    "Fur Elise|Beethoven|A Minor",
    "Moonlight Sonata|Beethoven|C# Minor",
    "Clair de Lune|Debussy|C# Minor",
    "Add|Sonata No.2|Chopin|B Minor",
    "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
    "Add|Fur Elise|Beethoven|C# Minor",
    "Remove|Clair de Lune",
    "ChangeKey|Moonlight Sonata|C# Major",
    "Stop",
])