/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    var max = Math.max(...piles);
    if(h === piles.length) return max; 

    var sum = eval(piles.join('+'));
    var min = Math.ceil(sum / h);
    var sumHour = 0;
    var amountPerHour = min;
    while(amountPerHour < max){
        sumHour = 0;
        piles.map((val) => {
            sumHour+=Math.ceil(val/amountPerHour);
        })
        if(sumHour <= h) return amountPerHour;
        amountPerHour++;
    }
    return max;
};

var arr =   [30,11,23,4,20];
var h = 6;
var res = minEatingSpeed(arr, h);
console.log(res);