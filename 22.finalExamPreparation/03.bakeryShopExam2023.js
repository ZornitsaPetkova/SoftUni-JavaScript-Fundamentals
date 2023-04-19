function bakery(data) {
    let food_storage = {};
    let sold = 0;
    let currentLine = data.shift();

    while (currentLine !== 'Complete') {
        let command = currentLine.split(' ')[0];

        switch (command) {
            case 'Receive': {
                let [, quantity, food] = currentLine.split(' ');

                if (quantity <= 0) {
                    break;
                } else {
                    if (food in food_storage) {
                        food_storage[food] += Number(quantity);
                    } else {
                        food_storage[food] = Number(quantity);
                    }
                }
                break;
            }
            case 'Sell': {
                let [, quantity, food] = currentLine.split(' ');
                if (quantity <= 0)
                    break;
                if (!(food in food_storage)) {
                    console.log(`You do not have any ${food}.`);
                    break;
                } else if (food_storage[food] < Number(quantity)) {
                    sold = food_storage[food];
                    delete food_storage[food];
                    console.log(`There aren't enough ${food}. You sold the last ${sold} of them.`);
                    break;
                } else {
                    food_storage[food] -= Number(quantity);
                    sold += Number(quantity);
                    if (food_storage[food] === 0) {
                        delete food_storage[food];
                    }
                    console.log(`You sold ${Number(quantity)} ${food}.`);
                }
                break;
            }
        }
        currentLine = data.shift();
    }

    for (let food in food_storage) {
        console.log(`${food}: ${food_storage[food]}`);
    }
    console.log(`All sold: ${sold} goods`);
}

bakery(["Receive 105 cookies",
    "Receive 10 donuts",
    "Sell 10 donuts",
    "Sell 1 bread",
    "Complete"]);

bakery(["Receive 10 muffins",
    "Receive 23 bagels",
    "Sell 5 muffins",
    "Sell 10 bagels",
    "Complete"]);