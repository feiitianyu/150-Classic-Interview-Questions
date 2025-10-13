/**
 * @param {number[]} nums
 * @return {number}
 */
var jump1 = function(nums) {
    let position = nums.length - 1;
    let steps= 0;

    while(position > 0) {
        for(let i = 0;i < position;i++) {
            if(i + nums[i] >= position) {
                position = i;
                steps++;
                break;
            }
        }
    }
    return steps;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump2 = function(nums) {
    let maxPos = 0,end = 0,steps = 0;
    for(let i = 0;i < nums.length;i++) {
        if(maxPos >= i) {
            maxPos = Math.max(maxPos, i + nums[i]);
            if(i === end) {
                end = maxPos;
                steps++;
            }
        }
    }
    return steps;
};
