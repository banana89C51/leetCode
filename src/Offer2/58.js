var MyCalendar = function() {
    this.fragArr = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    if(!this.fragArr.length) {
        this.fragArr.push({
            start: start, 
            end: end
        });
        return true;
    }
    for(var i = 0 ; i < this.fragArr.length; i++){
        if(this.fragArr[i].start >= start) break;
    }
    if( i && start < this.fragArr[i - 1].end) return false;
    // 插入最后
    if(i === this.fragArr.length) {
        this.fragArr.push({
            start: start, 
            end: end
        });
        return true;
    }
    if(end > this.fragArr[i].start) return false; 
    // 插入到合适的位置
     this.fragArr.splice(i,0, {
            start: start, 
            end: end
        });
    return true;
};

var obj = new MyCalendar();
var param_1 = obj.book(10,20);
var param_1 = obj.book(20,22);
var param_1 = obj.book(22,30);