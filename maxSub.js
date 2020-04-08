let maxSubArray = function(nums) {
  let output = nums[0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      output = Math.max(
        nums.slice(i, j).reduce((a, b) => a + b),
        output
      );
    }
  }
  return output;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
