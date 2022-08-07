/**
 * @param {number[]} w
 */
 var Solution = function(w) {
    this.indexArr = [];
    var sum = 0;
    for(var i = 0; i < w.length; i++){
        sum+=w[i];
        this.indexArr.push(sum);
    }
    this.sum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    if(this.indexArr.length === 1) return 0;
    var randNum = Math.round(Math.random()*(this.sum-1) + 1);
    var start = 0;
    var end = this.indexArr.length - 1;
    var mid = Math.floor((start + end ) / 2);
    while(start  < end && start !== mid && end!==mid){
        if(this.indexArr[mid] > randNum){
            end = mid - 1;
        }else if(this.indexArr[mid] < randNum){
            start = mid;
        }else{
            return mid;
        }
        mid = Math.floor((start + end ) / 2);
    }
    return (mid + 1 < this.indexArr.length && this.indexArr[mid + 1] <= randNum) ? mid + 1 : mid;
};
var w = [1,3];
var obj = new Solution(w)
var param_1 = obj.pickIndex()