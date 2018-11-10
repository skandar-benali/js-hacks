
    const person = {
        name: 'skandar',
        age: 24
    };
    // this is not a clone : demo:
    const missCloned = person;
    missCloned['added'] = 'new';
    console.log(person);
    delete person.added;

    // first way: assign ES6
    const cloned1 = Object.assign({}, person);
    console.log(cloned1);
    // second way: spread operator ES6
    const cloned2 = {...person};
    console.log(cloned2)

    // third method
    const cloned3 = {};
    for (let key in person) {
        cloned3[key] = person[key];
    }
    console.log(cloned3)

