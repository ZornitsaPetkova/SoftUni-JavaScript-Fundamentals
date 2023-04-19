function secretChat(input) {

    // input & result data
    let concealedMessage = input.shift(); // removes the first element from an array and returns that removed element.This method changes the length of the array.
    let instructions = input.slice(); // returns a copy of the array. Original array will not be modified. 


    // loop through instructions
    let instruction = instructions.shift() // взимаме първата инструкция

    while (instruction !== 'Reveal') {
        // apply instruction
        let arguments = instruction.split(':|:'); // разделяме аргументите от инструкциите посредством посочения знак 
        let instructionName = arguments.shift();

        switch (instructionName) {

            case 'InsertSpace': {
                let index = Number(arguments[0]);
                let concealedMessageArr = concealedMessage.split('');
                concealedMessageArr.splice(index, 0, ' ');
                concealedMessage = concealedMessageArr.join('');
                console.log(concealedMessage);
                break;
            }
            
            case 'Reverse': {
                let substring = arguments[0];

                if (concealedMessage.includes(substring)) {
                    let reversedString = substring.split('').reverse().join('');
                    let newConcealedMessage = concealedMessage.replace(substring, '');
                    concealedMessage = newConcealedMessage + reversedString;
                    console.log(concealedMessage);

                } else {
                    console.log('error')
                }
                break;
            }

            case 'ChangeAll': {
                let arg1 = arguments[0];
                let arg2 = arguments[1];

                let newStr = '';

                for (let i = 0; i < concealedMessage.length; i++) {

                    if (concealedMessage[i] == arg1) {
                        newStr += arg2;

                    } else {
                        newStr += concealedMessage[i];
                    }
                }
                concealedMessage = newStr;
                console.log(concealedMessage);
                break;
            }
           
        }

        // get next instruction
        instruction = instructions.shift();
    }
    // print generated activation key
    console.log(`You have a new text message: ${concealedMessage}`);

}

secretChat([

    'heVVodar!gniV',

    'ChangeAll:|:V:|:l',

    'Reverse:|:!gnil',

    'InsertSpace:|:5',

    'Reveal'

])