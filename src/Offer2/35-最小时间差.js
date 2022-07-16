/**
 * @param {string[]} timePoints
 * @return {number}
 */
 var findMinDifference = function(timePoints) {
    function timeSort(t1,t2){
        for(var i = 0; i< t1.length; i++){
            if(t1[i] === ':') continue;
           if (Number(t1[i]) > Number(t2[i])) return 1;
           else if(Number(t1[i]) < Number(t2[i])) return -1;
        }
        return 0;
    }
    // t1 <= t2
    function calculateDiff(t1, t2){
        const max = 24 * 60;
        var arr1 = t1.split(":");
        var arr2 = t2.split(":");
        var n1, n2;
        n1 = Number(arr1[0]) * 60 + Number(arr1[1]);
        n2 = Number(arr2[0]) * 60 + Number(arr2[1]);
        var diff = n2 - n1;
        return Math.min(diff, max - diff);
    }
    timePoints.sort((a,b) => timeSort(a,b));
    var min = 24 * 60;
    for(var i = 0; i < timePoints.length; i++){
        var n;
        //首位两个元素再做一次比较，因为钟表是个圈
        if(i === timePoints.length - 1) n = calculateDiff(timePoints[0], timePoints[i]);
        else n = calculateDiff(timePoints[i], timePoints[i+1]);
        if(n < min) min = n;
    }
    return min;
};
var times = ["00:00","04:00","22:00"];
const res = findMinDifference(times);