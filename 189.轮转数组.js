/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function(nums, k) {
    let n = nums.length;
    const newArr = new Array(n);
    for(let i = 0;i < n;i++) {
        newArr[(i + k) % n] = nums[i];
    }
    for(let i = 0;i < n;i++) {
        nums[i] = newArr[i];
    }
};

const gcd = (x, y) => y ? gcd(y, x % y) : x;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function(nums, k) {
    let n = nums.length;
    k = k % n;
    let count = gcd(k, n);
    for(let start = 0;start < count;start++) {
        let current = start;
        let prev = nums[start];
        do {
            const next = (current + k) % n;
            const temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
        } while(start !== current);
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
}

var rotate3 = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
