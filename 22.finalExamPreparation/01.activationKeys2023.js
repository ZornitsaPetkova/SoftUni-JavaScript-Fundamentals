function solve(input) {

    let rawActivationKey = input.shift();
    // console.log(rawActivationKey) // abcdefghijklmnopqrstuvwxyz

    let currentArray = input.slice();
    // console.log(currentArray) // ['Slice>>>2>>>6', 'Flip>>>Upper>>>3>>>14', 'Flip>>>Lower>>>5>>>7', 'Contains>>>def', 'Contains>>>deF', 'Generate']

    let currentLine = currentArray.shift();
    // console.log(currentLine); //Slice>>>2>>>6

    while (currentLine != 'Generate') {

        let arguments = currentLine.split('>>>');
        // console.log(arguments) // ['Slice', '2', '6']

        let instructionName = arguments.shift();

        switch (instructionName) {
            case 'Contains':
                {
                    let arg1 = arguments[0];

                    if (rawActivationKey.includes(arg1)) {
                        console.log(`${rawActivationKey} contains ${arg1}`)
                    } else {
                        console.log("Substring not found!");
                    }
                    break;
                }
            case 'Flip':
                {
                    let arg1 = arguments[0];
                    let arg2 = Number(arguments[1]);
                    let arg3 = Number(arguments[2]);

                    let partofKey = rawActivationKey.substring(arg2, arg3)  // взимам част от цялостния стринг, за да направя буквите главни след това
                    // console.log(partofKey) // defghijklmn

                    if (arg1 === 'Upper') {
                        let result = partofKey.toUpperCase();
                        rawActivationKey = rawActivationKey.replace(partofKey, result);
                        console.log(rawActivationKey);
                    } else if (arg1 === 'Lower') {
                        let result = partofKey.toLowerCase();
                        rawActivationKey = rawActivationKey.replace(partofKey, result);
                        console.log(rawActivationKey);
                    }
                    break;
                }
            case 'Slice':
                {
                    let arg1 = Number(arguments[0]);
                    let arg2 = Number(arguments[1]);

                    let deleted = rawActivationKey.substring(arg1, arg2);
                    rawActivationKey = rawActivationKey.replace(deleted, '');
                    console.log(rawActivationKey);
                    break;
                }

        }
        currentLine = currentArray.shift()

    }
    console.log(`Your activation key is: ${rawActivationKey}`);

}
solve(["abcdefghijklmnopqrstuvwxyz",

    "Slice>>>2>>>6",

    "Flip>>>Upper>>>3>>>14",

    "Flip>>>Lower>>>5>>>7",

    "Contains>>>def",

    "Contains>>>deF",

    "Generate"])