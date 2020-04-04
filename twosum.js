const twoSum = function(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output = [nums[j],nums[i]];
      }
    }
  }
  return output;
};
console.log(twoSum([1,5,7,4], 9));