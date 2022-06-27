/**
 * @param {string} s
 * @return {number}
 * integer range [-2^31, 2^31 - 1]
 */
 var myAtoi = function(s) {
    var a=s.split(' ');
    var b=0;
        
    for (let index = 0; index < a.length; index++) {
        // 4193
        b=parseInt(a[index]);
        // if not number
        if (isNaN(b) && (a[index]!=''))
            return 0;
        
        if (!(isNaN(b))){
            // 32-bit : 
            // 2^31 = 2147483648
            // (2^31) - 1 = 2147483647
            if (b>2147483647)
                b=2147483647;
            if (b<-2147483648)
                b=-2147483648;
            return b;
        }
    }
    return 0;
};

var result;
result = myAtoi("4193 with words");

console.log(result);