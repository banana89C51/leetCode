/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    if(temperatures.length === 1) return [0];
    if(temperatures.length === 2){
        if(temperatures[0] >= temperatures[1]){
            return [0,0];
        }else{
            return [1,0];
        }
    }
    var topArr = [];
    for(var i = 1; i<temperatures.length - 1; i++){
        if(temperatures[i] > temperatures[i - 1] && temperatures[i] >= temperatures[i +1]){
            topArr.push(i);
        }
    }
    var res = [];
    for(var i = 0; i<temperatures.length; i++){
        var index = 0;
        while(1){
            if(topArr[index] > i && temperatures[topArr[index]] > temperatures[i]) break;
            else index++;
            if(index >= topArr.length) break;
        }
        if(index >= topArr.length){
            res.push(0);
        }else{
            res.push(topArr[index] - i);
        }
    }
    return res;
};

const tem = [73,74,75,71,69,72,76,73];
dailyTemperatures(tem);
