function solve(data) {

    let pattern = 



    for (let i = 0; i < barcodesCount; i++) {
        const currentline = data[i];
        let ifMatch = currentline.match(patternValidBarcode);
        if (ifMatch !== null) {
          let ifDigits = currentline.match(patternDigits);
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
solve(["3",
"U$MichaelU$P@$asdqwe123P@$",
"U$NameU$P@$PasswordP@$",
"U$UserU$P@$ad2P@$"])
