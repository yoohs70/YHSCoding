/** 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSum = function(nums, target) {
    var array = []
    
    for(var i = 0; i < nums.length; i++){
        for(var j=i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                array.push(i, j)
            }
        }

    }
    return array
};

var result = [];
result = twoSum([2,7,11,15], 9)
console.log(result);

