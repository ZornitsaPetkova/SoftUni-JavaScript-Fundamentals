function boss(input) {
    const count = input.shift();
    const people = [];
    
    for (let i = 0; i < count; i++) {
        let pattern = /\|(?<name>[A-Z]{4,})\|\:\#(?<title>[A-Za-z]+\s[A-Za-z]+)\#/g;
        let current = input.join('').matchAll(pattern);
        if (input[i].match(pattern)) {
            for (const maches of current) {
                let name = maches.groups.name;
                let title = maches.groups.title;
                console.log(`${name}, The ${title}`)
                console.log(`>> Strength: ${name.length}`);
                console.log(`>> Armor: ${title.length}`);              
            }
        } else {
            console.log('Access denied!');
        }
 
    }
}
boss(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])