/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
    let maxprofit = 0;
    for(let i = 0;i < prices.length;i++) {
        for(let j = i + 1;j < prices.length;j++) {
            const profit = prices[j] - prices[i];
            if(profit > maxprofit) {
                maxprofit = profit;
            }
        }
    }
    return maxprofit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
    let minprice = Number.MAX_VALUE;
    let maxprofit = 0;
    for(let i = 0;i < prices.length;i++) {
        if(prices[i] < minprice) {
            minprice = prices[i];
        } else if(prices[i] - minprice > maxprofit) {
            maxprofit = prices[i] - minprice;
        }
    }
    return maxprofit;
};
