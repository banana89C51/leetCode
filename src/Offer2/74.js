/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length === 1) return intervals;
    intervals.sort((a,b) => a[0] - b[0]);
    var res = [intervals.shift()];
    while(intervals.length){
        var cp = res[res.length - 1];
        if(intervals[0][0] > cp[1]){
            res.push(intervals.shift());
        }else{
            cp[1] = Math.max(cp[1], intervals.shift()[1]);
        }
    }
    return res;
};

var arr = [[1,4],[4,5]]
merge(arr);