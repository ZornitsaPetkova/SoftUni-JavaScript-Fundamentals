function emojiDetector(data) {

    data = data.shift();

    let pattern = /(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g; // всички правилни попадения 
    let numPattern = /\d/gm; // отделно взимаме всички числа, с помощта на които ще смятаме cool treshold, count.length
    let numbers = data.match(numPattern); 
    let digits = ''; // празен стринг, в който събираме числата
    let treshold = 1; // за да добавяме стойности към него
    let count = data.match(pattern); // брой на откритите попадения от регекса 

    for (const digit of numbers) { // число от номерата, които има в попаденията на регекса
        digits += digit; // в празния стринг добавяме всяко число като ги конкатенираме. краят на фор цикъла изглежда така: 31131123521
    }

    for (const cool of digits) { 
        treshold *= Number(cool); // взимаме всяко от числата и го прибавяме в променливата трешхолд, като умножаваме числата едно с друго, получаваме 540;  
    }
    console.log(`Cool threshold: ${treshold}`)

    console.log(`${count.length} emojis found in the text. The cool ones are:`);

    for (const emoji of count) {
        let cool = 0;
        
        for (let i = 2; i < emoji.length - 2; i++) { // започваме от 2 до -2 заради символите преди и след думите
            cool += emoji[i].charCodeAt(); // тук смятаме за всяка буква от всяко попадение(cool emoji) еквивалента в число от charCodeAt и го добавяме в cool числото.
        }
        if (cool >= treshold) { 
            console.log(emoji) // трябва да е повече или равно на 540, за да бъде cool emoji
        }
    }

}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);