function createTreeByArr(arr) {
    if (!arr || !arr.length) return null;
    var arrNode = [];
    arr.map(item => {
        if (item === null || item === '') {
            arrNode.push(null)
        } else {
            arrNode.push({
                val: item,
                left: null,
                right: null
            })
        }
    });
    var bit = 0;
    var sum = 0;
    for (var i = 0; i < arrNode.length; i++) {
        if (i > sum) {
            bit++;
            sum += 2 ** bit
        }
        var pos = i - (sum - 2 ** bit) //当前组的第几位
        var leftIndex = sum + 1 + 2 * (pos - 1);
        var rightIndex = leftIndex + 1;
        if (!arrNode[i]) {
            // 补位
            var nullFlag = true;
            for (var k = i + 1; k < arrNode.length; k++) {
                if (arrNode[k] !== null) {
                    nullFlag = false;
                    break;
                }
            }
            if (!nullFlag) {
                leftIndex < arrNode.length && arrNode.splice(leftIndex, 0, null, null);
                continue;
            } else {
                // 剩下的元素都是null
                return arrNode[0];
            }

        };
        arrNode[i].left = leftIndex < arrNode.length ? arrNode[leftIndex] : null;
        arrNode[i].right = rightIndex < arrNode.length ? arrNode[rightIndex] : null;
    }
    return arrNode[0];
}