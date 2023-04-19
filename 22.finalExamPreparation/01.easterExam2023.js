function solve(data) {

    let string = data.shift();
    let currentArray = data.slice();
    let currentLine = currentArray.shift();

    while (currentLine !== 'Easter') {
        let arguments = currentLine.split(' ');
        let instructionName = arguments.shift();

        switch (instructionName) {
            case 'Replace':
                let currentChar = arguments[0];
                let newChar = arguments[1];

                for (let i = 0; i < string.length; i++) {
                    let currentLetter = string[i];

                    if (currentLetter === currentChar) {

                        string = string.replace(currentChar, newChar);
                    }
                }
                console.log(string);
                break;

            case 'Remove':
                let substring = arguments[0];
                let removed = '';

                if (string.includes(substring)) {

                    for (let i = 0; i < 3; i++) {

                        string = string.replace(substring, removed);
                    }
                    console.log(string);
                } else {
                    console.log(string);
                }

                break;

            case 'Includes':
                let booleanString = arguments[0];

                if (string.includes(booleanString)) {
                    console.log("True")
                } else {
                    console.log("False")
                }
                break;

            case 'Change':
                let index = arguments[0];

                if (index === 'Upper') {
                    let result = string.toUpperCase();
                    string = result;
                    console.log(string);
                } else if (index === 'Lower') {
                    let result = string.toLowerCase();
                    string = result;
                    console.log(string);
                }
                break;

            case 'Reverse':
                let startIndex = Number(arguments[0]);
                let endIndex = Number(arguments[1]);
              
                if (startIndex >= 0 && startIndex <= 50 && endIndex <= string.length- 1 && startIndex < endIndex) {
                    let partOfString = string.slice(startIndex, endIndex + 1);

                    if (string.includes(partOfString)) {
                        let result = partOfString.split('').reverse().join('');
                        console.log(result);
                    }
                }
                break;
        }
        currentLine = currentArray.shift();
    }
}
solve(["EastErbscomming",
    "Includes e",
    "Replace b I",
    "Remove comming",
    "Change Upper",
    "Change Lower",
    "Reverse 0 5",
    "Easter"])
