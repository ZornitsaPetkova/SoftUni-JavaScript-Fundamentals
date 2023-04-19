function solve(input) {

    input = input.shift() // разкриваме скобите, т.е масива става стринг 
    let pattern = /(\||\#)(?<item>[A-Za-z]+(\s[A-Za-z]*)?)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d{1,9}|[10000])\1/gm; // резултат от регекс
    let matches = input.matchAll(pattern); // взима всички попадения, които отговарят на регекса  

    let totalkcal = 0;  // Създаваме променлива, в която ще запазвазваме стойност на крайните ккал, съдържащи се в дадена храна
    let matchItem = []; // Създаваме празен масив, в които ще запазваме инфо за крайния резултат
    let matchDate = [];
    let matchKcal = [];

    for (const currentMatch of matches) {

        let item = currentMatch.groups.item; // създаваме променливите, за да ги ползваме, когато запълваме празните масиви
        let date = currentMatch.groups.date;
        let kcal = currentMatch.groups.kcal;

        matchItem.push(item); // запълваме празните масиви
        matchDate.push(date);
        matchKcal.push(kcal);

        totalkcal += Number(currentMatch.groups.kcal); // към тоталните ккал добавяме стойността на променливата ккал от по-горе.
    }

    let daysToSurvive = Math.trunc(totalkcal / 2000);

    console.log(`You have food to last you for: ${daysToSurvive} days!`);

    for (let i = 0; i < matchItem.length; i++) {
        console.log(`Item: ${matchItem[i]}, Best before: ${matchDate[i]}, Nutrition: ${matchKcal[i]}`);
    }
}
solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])