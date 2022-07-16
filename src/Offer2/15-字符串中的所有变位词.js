/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s2, s1) {
    if(!s1) return [0];
    if(!s2) return [];
    var targetMap = new Map();
    for(var i = 0; i < s1.length; i++){
        targetMap.set(s1[i], targetMap.has(s1[i]) ? targetMap.get(s1[i])+1 : 1);
    }
    var ob = {};
    var len = 0;
    var start = -1;
    var res = [];
    targetMap.forEach((val,key) => {
        ob[key] = val;
    });

    function resetMap(){
        for(const key in ob){
            targetMap.set(key, ob[key]);
        }
        len = 0;
        start = -1;
    }
    
    function clear(head, c){
        for(var i = head; i< s2.length; i++){
            if(s2[i] === c) {
                start = i + 1;
                return;
            };
            targetMap.set(s2[i] , targetMap.get(s2[i]) + 1);
            len--;
        }
    }
    
    for(var i = 0; i < s2.length; i++){
        if(!targetMap.has(s2[i])){
            if(!len && !res.length) continue;
            resetMap();
            continue;
        }
        if(targetMap.get(s2[i]) === 0){
            clear(start, s2[i]);
            continue;
        }
        start = start === -1 ? i : start;
        targetMap.set(s2[i], targetMap.get(s2[i]) - 1);
        len++;
        if(len === s1.length){
            targetMap.set(s2[start], targetMap.get(s2[start]) + 1);
            len--;
            res.push(start++);
        }
    }
    return res;
};

var s = "cbaebabacd";
var p = 'abc';
const res = checkInclusion(s,p);
console.log(res);
