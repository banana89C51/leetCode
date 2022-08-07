/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    var markMap = new Map();
    arr2.map(num => {
        markMap.set(num, 0);
    });
    var unNessArr = [];
    for(var num of arr1){
        if(markMap.has(num)) {
            markMap.set(num, markMap.get(num)+1);
        }else{
            unNessArr.push(num);
        }
    }
    unNessArr.sort((a,b) => a - b);
    arr1 = [];
    arr2.map(num => {
        var count = markMap.get(num);
        while(count--){
            arr1.push(num);
        }
    })
    arr1 = arr1.concat(unNessArr);
    return arr1;
};
var arr1 = [2,3,1,3,2,4,6,7,9,2,19]
var arr2 = [2,1,4,3,9,6]
relativeSortArray(arr1, arr2);