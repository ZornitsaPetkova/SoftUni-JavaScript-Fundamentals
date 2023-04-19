function solve(data) {

    let heroesCount = Number(data.shift());
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {

        let [heroName, HP, MP] = data.shift().split(' ');

        heroes[heroName] = {
            HP: Number(HP),
            MP: Number(MP)
        };

        if (HP > 100) {
            heroes[heroName].HP = Number(100);
        } 

        if (MP > 200) {
            heroes[heroName].MP = Number(200);
        }
    }
    let commands = data.slice();
    let currentLine = commands.shift();

    while (currentLine !== 'End') {
        let [command, heroName, arg1, arg2] = currentLine.split(" - ");

        switch (command) {
            case 'CastSpell': {
                if (heroes[heroName].MP >= Number(arg1)) {
                    let diff = Math.abs(heroes[heroName].MP - Number(arg1));
                    heroes[heroName].MP = diff;
                    console.log(`${heroName} has successfully cast ${arg2} and now has ${diff} MP!`)
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${arg2}!`);
                }
                break;
            }
            case 'TakeDamage': {

                let diff = (heroes[heroName].HP - Number(arg1));
                heroes[heroName].HP = diff;
                if (diff > 0) {
                    console.log(`${heroName} was hit for ${Number(arg1)} HP by ${arg2} and now has ${diff} HP left!`);
                } else {
                    console.log(`${heroName} has been killed by ${arg2}!`);
                    delete heroes[heroName];
                }
                break;
            }

            case 'Recharge': {
                if (Number(arg1) + heroes[heroName].MP > 200) {
                    console.log(`${heroName} recharged for ${200 - heroes[heroName].MP} MP!`);
                    heroes[heroName].MP = 200;
                } else {
                    console.log(`${heroName} recharged for ${Number(arg1)} MP!`);
                    heroes[heroName].MP += Number(arg1);
                }
                break;
            }

            case 'Heal': {
                if (Number(arg1) + heroes[heroName].HP > 100) {

                    console.log(`${heroName} healed for ${100 - heroes[heroName].HP} HP!`);
                    heroes[heroName].HP = 100;
                } else {
                    console.log(`${heroName} healed for ${Number(arg1)} HP!`);
                    heroes[heroName].HP += Number(arg1);
                }
                break;
            }

        }
        currentLine = commands.shift();
    }
    for (const alive in heroes) {
        let HP = heroes[alive].HP;
        let MP = heroes[alive].MP;

        console.log(`${alive}\n  HP: ${HP}\n  MP: ${MP}`);
    }
}
// solve([
//     "2",
//     "Solmyr 85 120",
//     "Kyrre 99 50",
//     "Heal - Solmyr - 10",
//     "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc",
//     "CastSpell - Kyrre - 15 - ViewEarth",
//     "End",
//   ]);

  solve([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End",
  ]);