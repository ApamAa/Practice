const searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      nums.push(target);
      nums.sort(function(a, b) {
        return a - b;
      });
    } else {
      return i;
    }
  }
};

console.log(searchInsert([1, 3, 5, 4], 2));
