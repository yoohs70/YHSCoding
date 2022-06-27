/**
 * @param {number} num
 * @return {string}
 * Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 */
var intToRoman = function(num) {
  
   var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

   var symbols = ['M','CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X','IX', 'V', 'IV', 'I'];

   var string = '';

   for(var i = 0; i < numbers.length && num > 0; i++){
        // 1994
        while(numbers[i] <= num){
            num -= numbers[i];
            string += symbols[i];
        }

   }
   return string;
};

var result = intToRoman(9);
console.log(result);