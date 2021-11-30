// IMPORT MODULES under test here:

import {
    addExclamationPoints, multiplyBy12ThenHalve, multiplyBySeven,
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

test('This function should take in a number and multiply it by seven', (expect) => {
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

test('This function should take in a number and multiply it by twelve then cut the result in half', (expect) => {
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

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

