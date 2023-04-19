function solve(input) {
    let stops = input.shift(); // премахва първият елемент от масива и го запазва в променливата stops
    // console.log(stops) // Hawai::Cyprys-Greece 

    let currentArray = input.slice(); // връща копие на моментниия масив 
    // console.log(currentArray) //  ['Add Stop:7:Rome', 'Remove Stop:11:16', 'Switch:Hawai:Bulgaria', 'Travel']

    let currentLine = currentArray.shift();
    // console.log(currentLine) // Add Stop:7:Rome

    while (currentLine !== 'Travel') {
        let arguments = currentLine.split(':');
        let instructionName = arguments.shift();

        switch (instructionName) {
            case 'Add Stop':
                let index = Number(arguments[0]);
                let string = arguments[1];

                if (index >= 0 && index < stops.length) { // индекс е валиден, ако започва в началния елемент на спирките и врършва преди дължината на елементите на спирките
                    stops = stops.slice(0, index) + string + stops.slice(index); // 
                }
                console.log(stops); //Hawai::RomeCyprys-Greece
                break;
            case 'Remove Stop':
                let startIndex = Number(arguments[0]);
                let endIndex = Number(arguments[1]);
                let removed = '';

                if (startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length) {
                    removed = stops.substring(startIndex, endIndex + 1);
                    stops = stops.replace(removed, '');
                    console.log(stops);
                }
                break;
            case 'Switch':
                let oldString = arguments[0];
                let newString = arguments[1];
                let switched = "";

                if (stops.includes(oldString)) {
                    stops = stops.replace(oldString, newString);
                    // stops = stops.split(oldString).join(newString);
                    console.log(stops)
                } else {
                    console.log(stops)
                }
                break;
        }
        currentLine = currentArray.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);

}
solve(["Hawai::Cyprys-Greece",

    "Add Stop:7:Rome",

    "Remove Stop:11:16",

    "Switch:Hawai:Bulgaria",

    "Travel"])