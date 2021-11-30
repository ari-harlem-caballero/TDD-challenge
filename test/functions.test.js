// IMPORT MODULES under test here:

import {
    addExclamationPoints, divideThenMultiply, multiplyBy12ThenHalve, multiplyBySeven, returnAsAnArray,
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

    expect.deepEqual(actual1, expected1, 'should return [1, 2, 3]');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

