/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    if (numbers.length === 1) return numbers[0];
    const len = numbers.length;
    if (numbers[len - 1] > numbers[0]) return numbers[0];
    var start = 0;
    var end = len - 1;
    var mid = parseInt((start + end) / 2);
    while (start !== mid && end !== mid) {
        if (numbers[start] < numbers[end]) return numbers[start];
        if (numbers[start] < numbers[mid]) {
            start = mid;
        } else if (numbers[start] === numbers[mid]) {
            start = start + 1;
        } else {
            end = mid;
        }
        mid = parseInt((start + end) / 2);
    }
    return numbers[start] > numbers[end] ? numbers[end] : numbers[start];
};

const arr = [10, 1, 10, 10, 10];
const res = minArray(arr);
console.log(res);