/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    if(arr.length < 3) return -1;
    // for(var i = 1; i < arr.length - 1; i++){
    //     if(arr[i] > arr[i - 1] && arr[i] > arr[i+1])
    //     return i;
    // }
    // return -1;
    var start = 0;
    var end = arr.length - 1;
    var mid = Math.floor((start + end) / 2);
    while(start < end && mid > start && mid < end){
        if(arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]){
            return mid;
        }else if(arr[mid] > arr[mid - 1]){
            start = mid;
        }else{
            end = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
};
var arr = [3,4,5,1]
var res = peakIndexInMountainArray(arr);
console.log(res);