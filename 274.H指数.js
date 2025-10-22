/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex1 = function(citations) {
    citations.sort((a, b) => a - b);
    let h = 0, i = citations.length - 1;
    while(i >= 0 && citations[i] > h) {
        h++;
        i--;
    }
    return h;
};

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex2 = function(citations) {
    let n = citations.length, tot = 0;
    let counter = new Array(n + 1).fill(0);
    for(let i = 0;i < n;i++) {
        if(citations[i] >= n) {
            counter[n]++;
        } else {
            counter[citations[i]]++;
        }
    }
    for(let i = n;i >= 0;i--) {
        tot += counter[i];
        if(tot >= i) {
            return i;
        }
    }
    return 0;
};

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex3 = function(citations) {
    let left = 0,right = citations.length;
    while(left < right) {
        let mid = Math.floor((left + right + 1) / 2);
        let cnt = 0;
        for(let v of citations) {
            if(v >= mid) {
                cnt += 1;
            }
        }
        if(cnt >= mid) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return left;
};
