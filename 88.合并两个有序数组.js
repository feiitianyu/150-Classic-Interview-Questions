/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge1 = function(nums1, m, nums2, n) {
    let p1 = 0,p2 = 0;
    let sorted = new Array(m + n).fill(0);
    let cur;
    while(p1 < m || p2 < n) {
        if(p1 === m) {
            cur = nums2[p2++];
        } else if(p2 === n) {
            cur = nums1[p1++];
        } else if(nums1[p1] < nums2[p2]) {
            cur = nums1[p1++];
        } else {
            cur = nums2[p2++];
        }
        sorted[p1 + p2 - 1] = cur;
    }
    for(let i = 0;i !== m + n;i++) {
        nums1[i] = sorted[i]
    }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function(nums1, m, nums2, n) {
    let p1 = m - 1,p2 = n - 1;
    let tail = m + n - 1;
    let cur;
    while(p1 >= 0 || p2 >= 0) {
        if(p1 === -1) {
            cur = nums2[p2--];
        } else if(p2 === -1) {
            cur = nums1[p1--];
        } else if(nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            cur = nums2[p2--];
        }
        nums1[tail--] = cur
    }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge3 = function(nums1, m, nums2, n) {
    let i = m + n - 1;
    while(n > 0) {
        if(m > 0 && nums1[m - 1] > nums2[n - 1]) {
            nums1[i--] = nums1[--m];
        } else {
            nums1[i--] = nums2[--n]
        }
    }
};