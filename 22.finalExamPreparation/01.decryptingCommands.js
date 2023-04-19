function decryptingCommands(input) {

    let message = input.shift();
    let instructions = input.slice();

    let instruction = instructions.shift();

    while (instruction !== 'Finish') {
        let arguments = instruction.split(' ');
        let instructionName = arguments.shift();

        switch (instructionName) {
            case 'Replace': {
                let first = arguments[0];
                let second = arguments[1];

                for(let i = 0; i < message.length; i++) {
                    let currentLetter = message.charAt(i);

                    if(currentLetter === first) {
                        
                        message = message.replace(currentLetter, second);
                    }
                    
                }
                console.log(message);
                
                break;
                }
                
            case 'Cut': {
                let first = Number(arguments[0]);
                let second = Number(arguments[1]);
                if (second >= message.length || second < 0 || first >= message.length || first < 0 ) {
                    console.log(`Invalid indices!`);
                } else {
                    let middle = message.slice(first, second + 1);
                    message = message.replace(middle, "");
                    console.log(message);

                }
                break;
            }
            case 'Make': {
                let first = arguments[0];
                if (first === 'Upper') {
                    let result = message.toUpperCase();
                    message = result;
                    console.log(message);
                } else if (first === 'Lower') {
                    let result = message.toLowerCase();
                    message = result;
                    console.log(message);
                }
                break;
            }
            case 'Check': {
                let first = arguments[0];
                let lowerArg = first.toLowerCase();
                let lowerCommand= message.toLowerCase();

                if (lowerCommand.includes(lowerArg)) {
                    console.log(`Message contains ${first}`);
                } else {
                    console.log(`Message doesn't contain ${first}`);
                }
                break;
            }
            case 'Sum': {
                let first = Number(arguments[0]);
                let second = Number(arguments[1]);
                let result = 0;
                let middle = message.substring(first, second + 1);
                if (second >= message.length || second < 0 || first >= message.length || first < 0 )  {
                    console.log(`Invalid indices!`);
                } else {
                for (let i = 0; i < middle.length; i++) {
                    let amount =  middle.charCodeAt(i);
                    result += amount
                }
                console.log(result);
            }
            break;

        }

    }

    instruction = instructions.shift();
}


}
decryptingCommands(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"])