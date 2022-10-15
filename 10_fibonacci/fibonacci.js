
  const fibonacci = function(num) {

num = Number(num)
    if (num < 0){
    return "OOPS"
}else if (num > 0 ){

        let a = 0, b = 1, c = num
        for (let i = 1; i < num; i++){
            c = a + b
            a = b
            b = c
        }
        return c   
}

};

// Do not edit below this line
module.exports = fibonacci;
