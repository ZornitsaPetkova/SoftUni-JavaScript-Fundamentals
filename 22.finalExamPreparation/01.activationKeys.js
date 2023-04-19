function activationKeys(input) {

    let message = input.shift(); // взима първия ред в стринг формат и го премахва от масива.
    let currentArray = input.slice(); //масив от останалите редове

    let currentLine = currentArray.shift(); // взима първия ред на новия масив т.е Slice>>>2>>>6

    while (currentLine !== 'Generate') {
        let arguments = currentLine.split('>>>');
        let instructionName = arguments.shift();

        switch (instructionName) {
            case 'Contains': {
                let first = arguments[0];

                if (message.includes(first)) {
                    console.log(`${message} contains ${first}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            }
            case 'Flip': {
                let first = arguments[0];
                let second = Number(arguments[1]);
                let third = Number(arguments[2]);

                let partOfMessage = message.substring(second, third); // взима час от съобщението

                if (first === 'Upper') {
                    let result = partOfMessage.toUpperCase();
                    message = message.replace(partOfMessage, result);
                    console.log(message);
                } else if (first === 'Lower') {
                    let result = partOfMessage.toLowerCase();
                    message = message.replace(partOfMessage, result);
                    console.log(message);
                }
                break;
            }
            case 'Slice': {
                let first = Number(arguments[0]);
                let second = Number(arguments[1]);

                let partOfMessage = message.substring(first, second);
                message = message.replace(partOfMessage, '');
                console.log(message);
                break;
            }

        }
        currentLine = currentArray.shift();
    }
    console.log(`Your activation key is: ${message}`);

}
activationKeys(["0123456789a",

"Slice>>>1>>>5",

"Contains>>>9a",

"Contains>>>01",

"Generate"])