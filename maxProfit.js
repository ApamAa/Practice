const maxProfit = function(prices) {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    let diff = prices[i + 1] - prices[i];
    if (diff > 0) profit += diff;
  }

  return profit;
};
console.log(maxProfit([7, 6, 4, 3, 1]));
