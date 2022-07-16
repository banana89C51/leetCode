/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
    if(asteroids.length === 1) return asteroids;
    var pIndex = 0;
    while(1){
        if(pIndex && asteroids[pIndex] < 0 && asteroids[pIndex - 1] > 0){
            if(Math.abs(asteroids[pIndex - 1]) > Math.abs(asteroids[pIndex])){
                //正数大 负数消失
                asteroids.splice(pIndex--, 1);
            }else if(Math.abs(asteroids[pIndex - 1]) < Math.abs(asteroids[pIndex])){
                //负数大 正数消失
                asteroids.splice(pIndex - 1, 1);
                pIndex-=2;
                continue;
            }else{
                //一样大 一起消失
                asteroids.splice(pIndex - 1, 2);
                pIndex-=2;
            }
        }
        if(pIndex++ >= asteroids.length - 1) return asteroids;
    }
};

var arr =[5,10,-5]
const res = asteroidCollision(arr);
console.log(res);