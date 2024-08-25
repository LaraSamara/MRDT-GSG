const URL = "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/";
var maxProfit = function(prices) {
    let [profit,left,right] = [0,0,1];
    while(right < prices.length){
        if(prices[left] >= prices[right]) left = right;
            profit = Math.max(profit, prices[right]-prices[left]);
            right++;
    }
    return profit;
};