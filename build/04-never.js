"use strict";
const withoutEnd = () => {
    while (true) {
        console.log('nunca para de aprender');
    }
};
const fail = (message) => {
    throw new Error(message);
};
const example = (input) => {
    if (typeof input === 'string') {
        return 'es un string';
    }
    else if (Array.isArray(input)) {
        return 'es un Array';
    }
    return fail('not match');
};
console.log(example('hola'));
console.log(example([1, 2, 3, 4, 5]));
console.log(example(1234)); //detiene
console.log(example('Hola despues del fail'));
console.log(example('Hola despues del fail'));
