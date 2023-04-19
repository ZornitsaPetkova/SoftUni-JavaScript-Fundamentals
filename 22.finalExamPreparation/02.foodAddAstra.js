function solve(input) {

    input = input.shift();
    let pattern = /(\||\#)(?<item>[A-Za-z]+(\s[A-Za-z]*)?)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d{1,9}|[10000])\1/gm;
    let matches = input.matchAll(pattern);

    let totalkcal = 0;
    let matchName = [];
    let matchDate = [];
    let matchKcal = [];

    for (const currentMatch of matches) {

        let item = currentMatch.groups.item;
        let date = currentMatch.groups.date;
        let kcal = currentMatch.groups.kcal;

        matchName.push(item);
        matchDate.push(date);
        matchKcal.push(kcal);

        totalkcal += Number(currentMatch.groups.kcal);
    }

    let survive = Math.trunc(totalkcal / 2000);

    console.log(`You have food to last you for: ${survive} days!`);

    for (let i = 0; i < matchName.length; i++) {
        console.log(`Item: ${matchName[i]}, Best before: ${matchDate[i]}, Nutrition: ${matchKcal[i]}`);
    }

}
solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])