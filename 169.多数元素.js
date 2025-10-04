/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [3,2,3];

var majorityElement1 = function(nums) {
    function countNums(nums) {
        let counts = new Map();
        for (const num of nums) {
            if(counts.has(num)) {
                counts.set(num, counts.get(num) + 1);
            } else {
                counts.set(num, 1);
            }
        }
        return counts;
    }
    
    const counts = countNums(nums);
    let majorityEntry = null;
    for (const entry of counts.entries()) {
        if(majorityEntry === null || entry[1] > majorityEntry[1]) {
            majorityEntry = entry;
        }
    }

    return majorityEntry[0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement2 = function(nums) {
    function countInRange(nums, num, lo, hi) {
        let count = 0;
        for(let i = lo;i <= hi;i++) {
            if(nums[i] === num) {
                count++;
            }
        }
        return count;
    }

    function majorityElementRec(nums, lo, hi) {
        if(lo === hi) {
            return nums[lo];
        }
        let mid = Math.floor((hi - lo) / 2) + lo;
        const left = majorityElementRec(nums, lo, mid);
        const right = majorityElementRec(nums, mid + 1, hi);

        if(left === right) {
            return left;
        }

        let leftCount = countInRange(nums, left, lo, hi);
        let rightCount = countInRange(nums, right, lo, hi);

        return leftCount > rightCount ? left : right;
    }

    return majorityElementRec(nums, 0, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement3 = function(nums) {
    let count = 0;
    let candidate = null;

    for (const num of nums) {
        if(count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};
