const median = function(nums1, nums2) {
  if (nums1.length !== 0 && nums2.length !== 0) {
    for (let i = 0; i < nums1.length; i++) {
      nums2.push(nums1[i]);
    }
    let middleIndex = (nums2.length - 1) / 2;
    nums2.sort(function(a, b) {
      return a - b;
    });

    if (nums2.length  % 2 !== 0) {
      return nums2[middleIndex];
    } else if (nums2.length % 2 === 0) {
      middleIndex = Math.round(middleIndex);
      return ([nums2[middleIndex - 1] + nums2[middleIndex]] / 2);
    }
  }
};
console.log(median([1, 5, 3], [2]));
