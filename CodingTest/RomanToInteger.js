/**
 * @param {string} s
 * @return {number}
 * Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

s = "III" => 3
s = "LVIII" => 58
s = "MCMXCIV" => 1994
 */

 var romanToInt = function(s) {
    let n = 0;
    const number = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    for(let i = 0; i<s.length; i++){
       let atual = s[i]
       let prox = s[i+1]
       
       if(prox && number[prox] > number[atual]){
           n -= number[atual]
       } else{
           n += number[atual]
       }
    }
    
    
    return n
};

var result = romanToInt("MCMXCIV");

console.log(result);
