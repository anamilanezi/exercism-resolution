// 1. Calculate the sum for the numbers on the slot machine

function twoSum(array1, array2) {

    function transformArray(array) {
        var newNumber = '0';
        for(var i = 0; i < array.length; i++) {
            newNumber = newNumber + array[i]
        }
        return Number(newNumber)
    }
    return transformArray(array1) + transformArray(array2);
}

function twoSumJoin(array1, array2) {
    function joinArray(array) {
        return array.join('');
    }
    return Number(joinArray(array1)) + Number(joinArray(array2))
}

const leftInput = [2, 4];
const rightInput = [1, 5, 7];
console.log(twoSum(leftInput, rightInput));
console.log(twoSumJoin(leftInput, rightInput));
console.log(twoSum([1, 2, 3], [0, 7]));
console.log(twoSumJoin([1, 2, 3], [0, 7]));

// 2. Determine if a number is a palindrome

function luckyNumber(value) {
    function goBackwards(value) {
        var backwardNumber = 0;
        var number = String(value);
        for(var i = (number.length - 1); i >= 0; i--) {
            backwardNumber += number[i];
        } return Number(backwardNumber);
    } return goBackwards(value) === value;
}
console.log(luckyNumber(123));          // false
console.log(luckyNumber(1232112321));   // true

// Generate an error message for invalid user input