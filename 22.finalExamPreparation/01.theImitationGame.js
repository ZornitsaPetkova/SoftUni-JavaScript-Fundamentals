function solve(input) {

    let encryptedMessage = input.shift();
    let currentArray = input.slice();

    let currentLine = currentArray.shift();

    while (currentLine !== 'Decode') {

        let arguments = currentLine.split('|');
        let instructionName = arguments.shift();

        switch (instructionName) {

            case 'Move': {
                let arg1 = Number(arguments[0]);
                encryptedMessage = encryptedMessage.slice(arg1) + encryptedMessage.slice(0, arg1);
                console.log(encryptedMessage)
                break;
            }
            case 'Insert': {
                let arg1 = Number(arguments[0]);
                let arg2 = arguments[1];
                encryptedMessage = encryptedMessage.slice(0, arg1) + arg2 + encryptedMessage.slice(arg1);
                console.log(encryptedMessage)
                break;
            }
            case 'ChangeAll': {

                let arg1 = arguments[0];
                let arg2 = arguments[1];

                let newStr = '';

                for (let i = 0; i < encryptedMessage.length; i++) {

                    if (encryptedMessage[i] == arg1) {
                        newStr += arg2;

                    } else {
                        newStr += encryptedMessage[i];
                    }
                }
                encryptedMessage = newStr;
            }
        }
        currentLine = currentArray.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`)

}
solve([

    'zzHe',

   'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode'

])