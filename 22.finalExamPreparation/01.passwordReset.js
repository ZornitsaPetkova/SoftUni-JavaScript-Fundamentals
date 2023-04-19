function solve(data) {

    let string = data.shift();
    let currentArray = data.slice();
    let currentLine = currentArray.shift();

    while (currentLine !== 'Done') {
        let arguments = currentLine.split(' ');
        let instructionName = arguments.shift();

        switch (instructionName) {
            case 'TakeOdd':
                let modifiedString = "";
                for (let i = 0; i < string.length; i++) {
                    if (i % 2 === 1) {
                        modifiedString += string[i];
                    }
                }
                string = modifiedString;
                console.log(string);
                break;

            case 'Cut':
                let index = Number(arguments[0]);
                let length = Number(arguments[1]);

                let partOfString = string.substring(index, index + length); // взимаме 'mer'
                string = string.replace(partOfString, ''); // замествам го с празен стринг
                console.log(string);
                break;

            case 'Substitute':
                let substring = arguments[0];
                let substitute = arguments[1];


                if (string.includes(substring)) {
                    string = string.split(substring).join(substitute);
                    console.log(string)
                } else {
                    console.log("Nothing to replace!");
                }
                break;
        }
        currentLine = currentArray.shift();
    }
    console.log(`Your password is: ${string}`);
}
solve([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done",
]);