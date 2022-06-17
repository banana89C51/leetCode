export function createTreeByArr(arr: []) {
    if (!arr || !arr.length) return null;
    var bit = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i > sum) {
            bit++;
            sum += 2 ** bit
        }
        var pos = i - (sum - 2 ** bit) //当前组的第几位
        var leftIndex = sum + 1 + 2 * (pos - 1);
        var rightIndex = leftIndex + 1;
        var node = {
            val: arr[i],
            left: leftIndex < arr.length ? leftIndex : null,
            right: rightIndex < arr.length ? rightIndex : null
        };
    }
}