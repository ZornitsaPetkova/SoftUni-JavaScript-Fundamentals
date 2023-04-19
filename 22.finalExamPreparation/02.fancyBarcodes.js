function solve(data) {
    const number = Number(data.shift());

    const patternW = /(\@\#{1,})(?<product>[A-Z][A-Za-z\d]{4,}[A-Z])\1/gm;
    const patternD = /\d/gm;

    for (let i = 0; i < number; i++) {
        const currentLine = data[i];
        let ifMatch = currentLine.match(patternW);
        if (ifMatch !== null) {
            let ifDigits = currentLine.match(patternD);
            if (ifDigits !== null) {
                console.log(`Product group: ${ifDigits.join("")}`);
            } else {
                console.log("Product group: 00");
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}
solve(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);