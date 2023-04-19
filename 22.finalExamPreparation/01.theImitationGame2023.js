function solve(input) {

    let encryptedMessage = input.shift();
    // console.log(encryptedMessage) // zzHe
    let currentArray = input.slice();
    // console.log(currentArray) // ['ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'] the new array

    let currentLine = currentArray.shift();
    // console.log(currentLine) // ChangeAll|z|l

    while (currentLine !== 'Decode') {

        let arguments = currentLine.split('|');
        // console.log(arguments) // ['ChangeAll', 'z', 'l']

        let instructionName = arguments.shift();

        switch (instructionName) {
            case 'Move':
                {
                    let arg1 = Number(arguments[0]);
                    encryptedMessage = encryptedMessage.slice(arg1) + encryptedMessage.slice(0, arg1);
                    // console.log(encryptedMessage) // ezzH
                    break;
                }
            case 'Insert':
                {
                    let arg1 = Number(arguments[0]);
                    let arg2 = arguments[1];
                    encryptedMessage = encryptedMessage.slice(0, arg1) + arg2 + encryptedMessage.slice(arg1);
                    // console.log(encryptedMessage); // zzoHe
                    break;
                }
            case 'ChangeAll':
                {
                    let arg1 = arguments[0];
                    let arg2 = arguments[1];
                    /* encryptedMessage = encryptedMessage.replaceAll(arg1,arg2);
                    console.log(encryptedMessage); */

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
        currentLine = currentArray.shift()
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