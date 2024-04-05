const removeEvenNumber = require('./remove-even-numbers');

it ("should remove even numbers from an array", () => {
    const answer = removeEvenNumber([1,2,3,4,5,6,7,8,9,10, 11]);
    expect(answer).toEqual([1, 3, 5, 7, 9, 11])
});