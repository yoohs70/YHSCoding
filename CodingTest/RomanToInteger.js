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
    const romanData = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }
    
    let i = 0;
    let sum = 0;
    while(i < s.length){
        let currentSymbol = s.substring(i, i +1);
        
        let currentValue = 0;
      
        Object.keys(romanData).forEach((key) => {
            // i = 0; currentValue : 1000 
            // i = 1; currentValue : 100
            if(key === currentSymbol)
                currentValue= romanData[key]
        })
        let nextValue = 0;
        if(i + 1 < s.length){
            // i = 0; C
            let nextSymbol = s.substring(i + 1, i + 2);
            // i = 0; nextValue = 100
            // i = 1; nextValue = 1000
             Object.keys(romanData).forEach((key) => {
                if(key === nextSymbol)
                    nextValue = romanData[key];
            })
        }
        if(currentValue < nextValue){
            // i = 1; 1000 + 900 = 1900
            sum += (nextValue - currentValue);
            i += 2;
        }
        else{
            // i = 0; sum = 1000
            sum += currentValue;
            i += 1;
        }
    }
    
    
    return sum;
};

var result = romanToInt("MCMXCIV");

console.log(sum);
