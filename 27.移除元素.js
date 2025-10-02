/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement1 = function(nums, val) {
    let left = 0;
    for(let right = 0;right < nums.length;right++) {
        if(nums[right] !== val) {
            nums[left] = nums[right];
        }
        left++;
    }
    return left;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement2 = function(nums, val) {
    let left = 0,right = nums.length;
    while(left < right) {
        if(nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};
