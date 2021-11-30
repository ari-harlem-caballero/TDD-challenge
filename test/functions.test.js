// IMPORT MODULES under test here:

import {
    addExclamationPoints, divideThenMultiply, makeLuckyGreeting, multiplyBy12ThenHalve, multiplyBySeven, returnAsAnArray, returnAsAString,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExlamationPoints should return a string with 3 exclamation points added to the end', (expect) => {
    const expected1 = 'frogs!!!';
    
    const actual1 = addExclamationPoints('frogs');
    
    const expected2 = 'dogs!!!';

    const actual2 = addExclamationPoints('dogs');
    
    const expected3 = 'cows!!!';

    const actual3 = addExclamationPoints('cows');
    
    expect.equal(actual1, expected1, 'should return frogs!!!');
    expect.equal(actual2, expected2, 'should return dogs!!!');
    expect.equal(actual3, expected3, 'should return cows!!!');
});

test('multiplyBySeven should take in a number and multiply it by seven', (expect) => {
    const expected1 = 21;

    const actual1 = multiplyBySeven(3);

    const expected2 = 28;

    const actual2 = multiplyBySeven(4);

    const expected3 = 49;

    const actual3 = multiplyBySeven(7);

    expect.equal(actual1, expected1, 'should return 21');
    expect.equal(actual2, expected2, 'should return 28');
    expect.equal(actual3, expected3, 'should return 49');
});

test('multiplyBy12ThenHalve should take in a number and multiply it by twelve then cut the result in half', (expect) => {
    const expected1 = 36;

    const actual1 = multiplyBy12ThenHalve(6);

    const expected2 = 18;

    const actual2 = multiplyBy12ThenHalve(3);

    const actual3 = 168;

    const expected3 = multiplyBy12ThenHalve(28);

    expect.equal(actual1, expected1, 'should return 36');
    expect.equal(actual2, expected2, 'should return 18');
    expect.equal(actual3, expected3, 'should return 168');
});

test('divideThenMultiply should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected1 = 64;

    const actual1 = divideThenMultiply(80, 5, 4);

    const expected2 = 300;

    const actual2 = divideThenMultiply(200, 6, 9);

    const expected3 = 42;

    const actual3 = divideThenMultiply(6, 2, 14);

    expect.equal(actual1, expected1, 'should return 64');
    expect.equal(actual2, expected2, 'should return 300');
    expect.equal(actual3, expected3, 'should return 42');
});

test('returnAsAnArray should take in three numbers and return those numbers in an array', (expect) => {
    const expected1 = [1, 2, 3];

    const actual1 = returnAsAnArray(1, 2, 3);

    const expected2 = [2, 6, 10];

    const actual2 = returnAsAnArray(2, 6, 10);

    const expected3 = [3, 30, 15];

    const actual3 = returnAsAnArray(3, 30, 15);

    expect.deepEqual(actual1, expected1, 'should return [1, 2, 3]');
    expect.deepEqual(actual2, expected2, 'should return [2, 6, 10]');
    expect.deepEqual(actual3, expected3, 'should return [3, 30, 15]');
});

test('returnAsAString should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected1 = '123';

    const actual1 = returnAsAString(1, 2, 3);

    const expected2 = '666';

    const actual2 = returnAsAString(6, 6, 6);

    const expected3 = '432';

    const actual3 = returnAsAString(4, 3, 2);

    expect.deepEqual(actual1, expected1, 'should return 123');
    expect.deepEqual(actual2, expected2, 'should return 666');
    expect.deepEqual(actual3, expected3, 'should return 432');
});

test('makeLuckyGreeting should take in two numbers and return a greeting announcing that the sum of those numbers is todays lucky number', (expect) => {
    const expected1 = 'Hello! Your lucky number for the day is 13.';

    const actual1 = makeLuckyGreeting(7, 6);

    expect.deepEqual(actual1, expected1, 'should return Hello! Your lucky number for the day is 13.');
});

