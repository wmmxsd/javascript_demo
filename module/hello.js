'use strict'
const s = 'Hello';

function greet(name) {
    console.log(s + ',' + name + '!');
}

function hi(name) {
    console.log('Hi', name);
}

module.exports = {
    greet: greet,
    hi: hi
}