/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    if(!s1) return true;
    if(!s2) return false;
    var targetMap = new Map();
    for(var i = 0; i < s1.length; i++){
        targetMap.set(s1[i], targetMap.has(s1[i]) ? targetMap.get(s1[i])+1 : 1);
    }
    var ob = {};
    var len = 0;
    var start = -1;
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
            if(!len) continue;
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
        if(len === s1.length) return true;
    }
    return false;
};
