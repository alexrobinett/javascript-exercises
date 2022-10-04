const repeatString = function(string,num) {
    
    if (Math.sign(num) === -1){
        return "ERROR"
    }else {
        let newStr = ""
        for(let i = 0; i < num; i++){
            newStr += string
            
        }
        return newStr 
    }
  
    
};

// Do not edit below this line
module.exports = repeatString;
