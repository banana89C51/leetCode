/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     if(prices.length<=1) return 0;
//     var max = 0;
//     for(var i = 0; i<prices.length; i++){
//         for(var j = i+1; j<prices.length; j++){
//             var num = prices[j] - prices[i];
//             if(num > max) max = num;
//         }
//     }
//     return max;
// };
var maxProfit = function (prices) {
    if (prices.length <= 1) return 0;
    var start = 0;
    var max = 0;
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] < prices[start]) {
            start = i;
            continue;
        }
        if (prices[i] - prices[start] > max) {
            max = prices[i] - prices[start];
            continue;
        }
    }
    return max;
};

var maxProfit = function (prices) {
    if (prices.length <= 1) return 0;
    var minVal = prices[0];
    var max = 0;
    for (const price of prices) {
        minVal = Math.min(price, minVal);
        max = Math.max(price - minVal, max);
    }
    return max;
};

var arr = [7, 2, 6, 4, 3, 1, 4];
maxProfit(arr);