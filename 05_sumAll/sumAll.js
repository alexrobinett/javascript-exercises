const sumAll = function(l,h) {

    if(l < h &&  l > 0 && typeof h !== "string"){
        let answer = 0
        for(let i = l; i <= h; i++){
         answer+= i
         }
         return answer
    }else if(l > h){
        let answer = 0
        for(let i = h; i <= l; i++){
         answer+= i
         }
         return answer
    }else return "ERROR"
    
};

// Do not edit below this line
module.exports = sumAll;
