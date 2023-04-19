function solve(data) {

    // get pattern from regex101
    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/gm; // много е важно буквите да са повече от 2, а не повече от 3
    //store travel points
    let travelPoints = 0;
    //find valid matches
    let matches = data.matchAll(pattern);
    // store valid matches in an array
    let validMatches = [];
    // loop through matches`s iterator
    for (const match of matches) {
        let currentLength = match.groups.destination.length;
        travelPoints += currentLength;
        validMatches.push(match.groups.destination);
    }
    // print destinations and travel points on the console
    console.log(`Destinations: ${validMatches.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`); // 80/100;(буквите), иначе 100/100
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");