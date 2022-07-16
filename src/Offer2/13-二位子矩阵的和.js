/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    this.matrix = matrix;
    this.sumMatrix = [];
    matrix.map(rowArr => {
        this.sumMatrix.push(new Array(rowArr.length));
    })
    for(var row = 0; row < matrix.length; row++){
        for(var col = 0; col < matrix[0].length; col++){
             this.sumMatrix[row][col] = {
                sum: ( row > 0 && col > 0 ? this.sumMatrix[row-1][col-1].sum : 0) + ( row > 0 ? this.sumMatrix[row-1][col].colSum : 0 ) + (col>0?this.sumMatrix[row][col-1].rowSum:0) + matrix[row][col],
                colSum: (row > 0 ? this.sumMatrix[row-1][col].colSum : 0) + matrix[row][col],
                rowSum: (col > 0 ? this.sumMatrix[row][col-1].rowSum : 0) + matrix[row][col]
            };
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if(row1 === row2  && col1 === col2) return this.matrix[row1][col1];
    if(row1 === col1 === 0) return this.this.sumMatrix[row2][col2].sum;
    var rightTopSum = !row1 ? 0 : this.sumMatrix[row1 - 1][col2].sum;
    var leftDownSum = !col1 ? 0 : this.sumMatrix[row2][col1 - 1].sum;
    var leftTopSum = col1 && row1 ? this.sumMatrix[row1-1][col1-1].sum : 0;
    var res = this.sumMatrix[row2][col2].sum + leftTopSum - rightTopSum - leftDownSum;
    return res;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

var matrix = [[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]];
var obj = new NumMatrix(matrix)
var param_1 = obj.sumRegion(1,0,4,0)